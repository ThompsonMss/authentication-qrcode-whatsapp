import { MongoClient } from "mongodb"

class Connection {

    url = `mongodb://${process.env.MONGO_DATABASE_USER}:${process.env.MONGO_DATABASE_PASSWORD}@${process.env.MONGO_DATABASE_HOST}:${process.env.MONGO_DATABASE_PORT}`;
    database: MongoClient | undefined = undefined

    async startConn () {
        try {

            this.database = new MongoClient(this.url);
            await this.database.connect();

        } catch (error) {
            console.error('Connection to MongoDB Atlas failed!', error);
            process.exit();
        }
    }

    getConn () {
        return this.database;
    }

}

export default new Connection();