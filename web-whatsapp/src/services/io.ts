import { io } from "socket.io-client"

export const socket = io(`${import.meta.env.VITE_URL_IO}`,
    {
        "path": "/socket.io",
        "forceNew": true,
        "reconnectionAttempts": 3,
        "timeout": 2000,
        "transports": ["websocket"]
    }
);
