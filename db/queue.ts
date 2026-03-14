import { connectDB } from "./db";
import { Queue } from "./models";

export async function createQueue(queue: Queue) {
  const db = await connectDB();
  const result = await db.collection<Queue>("queues").insertOne(queue);
  return result.insertedId;
}