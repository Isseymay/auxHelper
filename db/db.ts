'use server';
import { MongoClient } from "mongodb";


const url = "";

const client = new MongoClient(url);

export async function connectDB(){
    await client.connect();
    return client.db("auxHelper");
}