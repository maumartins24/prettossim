from flask import request, jsonify
from . import app, mysql
from .models import Barber, Client, Appointment
from flask_cors import cross_origin  # Para permitir requisições cross-origin

# Listar todos os barbeiros
@app.route('/api/barbers', methods=['GET'])
@cross_origin()
def get_barbers():
    barbers = Barber.get_all()
    return jsonify(barbers), 200

# Cadastrar um barbeiro
@app.route('/api/barbers', methods=['POST'])
@cross_origin()
def create_barber():
    data = request.json
    Barber.create(data['full_name'], data['cpf'], data['address'], data['nickname'], data['specialty'])
    return jsonify({'message': 'Barbeiro cadastrado com sucesso!'}), 201

# Listar todos os clientes
@app.route('/api/clients', methods=['GET'])
@cross_origin()
def get_clients():
    clients = Client.get_all()
    return jsonify(clients), 200

# Cadastrar um cliente
@app.route('/api/clients', methods=['POST'])
@cross_origin()
def create_client():
    data = request.json
    Client.create(data['full_name'], data['cpf'], data['address'], data['phone'], data['email'], data['password'])
    return jsonify({'message': 'Cliente cadastrado com sucesso!'}), 201

# Agendar um atendimento
@app.route('/api/appointments', methods=['POST'])
@cross_origin()
def create_appointment():
    data = request.json
    Appointment.create(data['client_id'], data['barber_id'], data['appointment_time'])
    return jsonify({'message': 'Agendamento criado com sucesso!'}), 201

# Consultar horários disponíveis de um barbeiro
@app.route('/api/check_availability/<int:barber_id>', methods=['GET'])
@cross_origin()
def check_availability(barber_id):
    date = request.args.get('date')
    available_slots = Appointment.check_availability(barber_id, date)
    return jsonify(available_slots), 200
