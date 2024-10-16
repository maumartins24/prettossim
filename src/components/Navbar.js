import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Lista de Barbeiros</Link>
                </li>
                <li>
                    <Link to="/appointments">Agendamentos</Link>
                </li>
                <li>
                    <Link to="/availability">Ver Disponibilidade</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
