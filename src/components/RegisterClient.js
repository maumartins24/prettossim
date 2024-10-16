import React, { useState } from 'react';
import axios from 'axios';

const RegisterClient = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        cpf: '',
        address: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/clients', formData)
            .then(response => {
                alert('Cliente cadastrado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao cadastrar cliente:', error);
            });
    };

    return (
        <div>
            <h2>Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="full_name" placeholder="Nome completo" onChange={handleChange} />
                <input type="text" name="cpf" placeholder="CPF" onChange={handleChange} />
                <input type="text" name="address" placeholder="Endereço" onChange={handleChange} />
                <input type="text" name="phone" placeholder="Telefone" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default RegisterClient;
