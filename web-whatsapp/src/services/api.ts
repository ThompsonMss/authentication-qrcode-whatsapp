import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API
});

export interface User {
    user: {
        _id: string;
        name: string;
        email: string;
        password: string;
    }
}

async function getDashboard (token: string): Promise<User> {

    const response = await api.get<User>('/dashboard', { headers: { "authentication": token } });

    return response.data
}

export const API = { getDashboard }