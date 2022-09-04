declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_CONN_STRING: string;
            DB_NAME: string;
            USERS_COLLECTION_NAME: string;
            HASH_CRYPTO: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
        }
    }
}

export { }