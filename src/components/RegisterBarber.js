import React, { useState } from 'react';
import axios from 'axios';

const RegisterBarber = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        cpf: '',
        address: '',
        nickname: '',
        specialty: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/barbers', formData)
            .then(response => {
                alert('Barbeiro cadastrado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao cadastrar barbeiro:', error);
            });
    };

    return (
        <div>
            <h2>Cadastro de Barbeiro</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="full_name" placeholder="Nome completo" onChange={handleChange} />
                <input type="text" name="cpf" placeholder="CPF" onChange={handleChange} />
                <input type="text" name="address" placeholder="Endereço" onChange={handleChange} />
                <input type="text" name="nickname" placeholder="Vulgo" onChange={handleChange} />
                <input type="text" name="specialty" placeholder="Especialidade" onChange={handleChange} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default RegisterBarber;
