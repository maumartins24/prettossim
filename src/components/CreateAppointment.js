import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateAppointment = () => {
    const [clients, setClients] = useState([]);
    const [barbers, setBarbers] = useState([]);
    const [formData, setFormData] = useState({
        client_id: '',
        barber_id: '',
        appointment_time: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error('Erro ao carregar clientes:', error));

        axios.get('http://localhost:5000/api/barbers')
            .then(response => setBarbers(response.data))
            .catch(error => console.error('Erro ao carregar barbeiros:', error));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/appointments', formData)
            .then(response => alert('Agendamento criado com sucesso!'))
            .catch(error => console.error('Erro ao criar agendamento:', error));
    };

    return (
        <div>
            <h2>Agendar Atendimento</h2>
            <form onSubmit={handleSubmit}>
                <select name="client_id" onChange={handleChange}>
                    <option value="">Selecione o cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.id}>{client.full_name}</option>
                    ))}
                </select>
                <select name="barber_id" onChange={handleChange}>
                    <option value="">Selecione o barbeiro</option>
                    {barbers.map(barber => (
                        <option key={barber.id} value={barber.id}>{barber.full_name}</option>
                    ))}
                </select>
                <input type="datetime-local" name="appointment_time" onChange={handleChange} />
                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default CreateAppointment;
