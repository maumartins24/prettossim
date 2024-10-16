import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientsList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/clients')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar clientes:", error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>{client.full_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsList;
