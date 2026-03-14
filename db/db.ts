import { MongoClient } from "mongodb";

const url = ""; // we currently have no db rn

const client = new MongoClient(url);

export async function connectDB(){
    await client.connect();
    return client.db("auxHelper");
}