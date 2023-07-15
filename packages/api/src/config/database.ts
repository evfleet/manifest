import { MongoClient } from "mongodb";

const url = process.env.DATABASE_URL as string;
const client = new MongoClient(url);

export default client;
