import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getBarbers = async () => {
    const response = await axios.get(`${API_URL}/barbers`);
    return response.data;
};

export const getAppointments = async () => {
    const response = await axios.get(`${API_URL}/appointments`);
    return response.data;
};

export const getAvailableSlots = async (barberId, date) => {
    const response = await axios.get(`${API_URL}/check_availability/${barberId}?date=${date}`);
    return response.data;
};
