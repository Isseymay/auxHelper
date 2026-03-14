import { connectDB } from "./db";
import { User } from "./models";
import { ObjectId } from "mongodb";

const collectionName = "users";

export async function createUser(user: User){
    const db = await connectDB();
    const result = await db.collection<User>(collectionName).insertOne(user);
    return result.insertedId;
}

export async function getUserByID(userID: string) {
    const db = await connectDB();
    return db.collection<User>(collectionName).findOne({ _id: new ObjectId(userID) });
}

export async function getUserByUsername(username: string) {
  const db = await connectDB();
  return db.collection<User>(collectionName).findOne({ username });
}