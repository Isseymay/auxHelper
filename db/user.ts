import { connectDB } from "./db";
import { User } from "./models";

export async function createUser(user: User){
    const db = await connectDB();
    const result = await db.collection<User>("users").insertOne(user);
    return result.insertedId;
}