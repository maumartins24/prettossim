from . import mysql

class Barber:
    @staticmethod
    def get_all():
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT id, full_name, cpf, address, nickname, specialty FROM barbers")
        barbers = cursor.fetchall()
        cursor.close()
        return [{'id': barber[0], 'full_name': barber[1], 'cpf': barber[2], 'address': barber[3], 'nickname': barber[4], 'specialty': barber[5]} for barber in barbers]

    @staticmethod
    def create(full_name, cpf, address, nickname, specialty):
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO barbers (full_name, cpf, address, nickname, specialty) VALUES (%s, %s, %s, %s, %s)",
                       (full_name, cpf, address, nickname, specialty))
        mysql.connection.commit()
        cursor.close()

class Client:
    @staticmethod
    def get_all():
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT id, full_name, cpf, address, phone, email FROM clients")
        clients = cursor.fetchall()
        cursor.close()
        return [{'id': client[0], 'full_name': client[1], 'cpf': client[2], 'address': client[3], 'phone': client[4], 'email': client[5]} for client in clients]

    @staticmethod
    def create(full_name, cpf, address, phone, email, password):
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO clients (full_name, cpf, address, phone, email, password) VALUES (%s, %s, %s, %s, %s, %s)",
                       (full_name, cpf, address, phone, email, password))
        mysql.connection.commit()
        cursor.close()

class Appointment:
    @staticmethod
    def create(client_id, barber_id, appointment_time):
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO appointments (client_id, barber_id, appointment_time) VALUES (%s, %s, %s)",
                       (client_id, barber_id, appointment_time))
        mysql.connection.commit()
        cursor.close()

    @staticmethod
    def check_availability(barber_id, date):
        cursor = mysql.connection.cursor()
        cursor.execute("""
            SELECT appointment_time FROM appointments
            WHERE barber_id = %s AND DATE(appointment_time) = %s
        """, (barber_id, date))
        appointments = cursor.fetchall()
        cursor.close()

        booked_times = [appointment[0].strftime('%H:%M') for appointment in appointments]
        all_times = [f'{hour:02d}:00' for hour in range(8, 18)]  # Horários disponíveis das 8:00 às 18:00
        available_times = [time for time in all_times if time not in booked_times]
        return available_times
