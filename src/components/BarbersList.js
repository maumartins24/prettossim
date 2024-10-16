import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BarbersList = () => {
    const [barbers, setBarbers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/barbers')
            .then(response => {
                setBarbers(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar barbeiros:", error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Barbeiros</h2>
            <ul>
                {barbers.map(barber => (
                    <li key={barber.id}>{barber.full_name} - {barber.specialty}</li>
                ))}
            </ul>
        </div>
    );
};

export default BarbersList;
