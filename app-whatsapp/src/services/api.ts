import axios from "axios"

const api = axios.create({
    baseURL: "http://192.168.0.121:4000" // Deve informa o IP da sua máquina ou servidor.
});

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export interface LoginResponse {
    auth: boolean;
    token: string;
    user: User;
}

async function login (email: string, password: string): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>('/login', {
        email,
        password
    });

    return response.data;
}

async function register (name: string, email: string, password: string): Promise<LoginResponse> {

    const response = await api.post<LoginResponse>('/register', {
        name,
        email,
        password
    });

    return response.data;
}

async function dashboard (token: string): Promise<User> {

    const response = await api.get<User>('/dashboard', { headers: { "authentication": token } });
    return response.data;
}

async function loginQrCode (uuid: string, token: string): Promise<void> {

    const response = await api.post<void>('/login-qr-code', {
        uuid
    }, { headers: { "authentication": token } });

    return response.data;
}

export const API = {
    login,
    register,
    dashboard,
    loginQrCode
}