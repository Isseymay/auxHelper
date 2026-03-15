import { connectDB } from "./db";
import { Queue } from "./models";
import { ObjectId } from "mongodb";

export async function createQueue(queue: Queue|null) {
  if (!(queue== null)){
    const db = await connectDB();
    const result = await db.collection<Queue>("queues").insertOne(queue);
    return result.insertedId;
  }
  const empty: Queue ={
    songs: []
  }
  const db = await connectDB();
  const result = await db.collection<Queue>("queues").insertOne(empty);
  return result.insertedId;
}
