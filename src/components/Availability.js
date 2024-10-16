import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Availability = () => {
    const [barbers, setBarbers] = useState([]);
    const [selectedBarber, setSelectedBarber] = useState('');
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/barbers')
            .then(response => setBarbers(response.data))
            .catch(error => console.error('Erro ao buscar barbeiros:', error));
    }, []);

    const handleBarberChange = (e) => {
        setSelectedBarber(e.target.value);
        setAvailableSlots([]);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const checkAvailability = () => {
        if (selectedBarber && selectedDate) {
            axios.get(`http://localhost:5000/api/check_availability/${selectedBarber}?date=${selectedDate}`)
                .then(response => setAvailableSlots(response.data))
                .catch(error => console.error('Erro ao buscar disponibilidade:', error));
        } else {
            alert('Selecione o barbeiro e a data');
        }
    };

    return (
        <div>
            <h2>Consultar Disponibilidade do Barbeiro</h2>
            <select onChange={handleBarberChange}>
                <option value="">Selecione o barbeiro</option>
                {barbers.map(barber => (
                    <option key={barber.id} value={barber.id}>{barber.full_name}</option>
                ))}
            </select>

            <input type="date" onChange={handleDateChange} />

            <button onClick={checkAvailability}>Verificar Disponibilidade</button>

            {availableSlots.length > 0 && (
                <div>
                    <h3>Horários Disponíveis:</h3>
                    <ul>
                        {availableSlots.map((slot, index) => (
                            <li key={index}>{slot}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Availability;
