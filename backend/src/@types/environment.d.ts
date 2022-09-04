declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_DATABASE_HOST: string;
            MONGO_DATABASE_USER: string;
            MONGO_DATABASE_PASSWORD: string;
            MONGO_DATABASE_PORT: number;
            MONGO_DATABASE_DATABASE: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
        }
    }
}

export { }