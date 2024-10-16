import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarbersList from './components/BarbersList';
import ClientsList from './components/ClientsList';
import RegisterBarber from './components/RegisterBarber';
import RegisterClient from './components/RegisterClient';
import CreateAppointment from './components/CreateAppointment';
import Availability from './components/Availability';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Sistema de Agendamento de Barbeiros</h1>
                <nav>
                    <ul>
                        <li><a href="/barbers">Lista de Barbeiros</a></li>
                        <li><a href="/clients">Lista de Clientes</a></li>
                        <li><a href="/register-barber">Cadastrar Barbeiro</a></li>
                        <li><a href="/register-client">Cadastrar Cliente</a></li>
                        <li><a href="/create-appointment">Agendar Atendimento</a></li>
                        <li><a href="/availability">Disponibilidade de Barbeiros</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/barbers" element={<BarbersList />} />
                    <Route path="/clients" element={<ClientsList />} />
                    <Route path="/register-barber" element={<RegisterBarber />} />
                    <Route path="/register-client" element={<RegisterClient />} />
                    <Route path="/create-appointment" element={<CreateAppointment />} />
                    <Route path="/availability" element={<Availability />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
