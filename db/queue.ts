import { connectDB } from "./db";
import { Queue } from "./models";
import { ObjectId } from "mongodb";

const collectionName = "queues";

export async function createQueue(queue: Queue) {
  const db = await connectDB();
  const result = await db.collection<Queue>(collectionName).insertOne(queue);
  return result.insertedId;
}

export async function addSongToQueue(queueId: string, songId: string) {
  const db = await connectDB();
  await db.collection<Queue>(collectionName).updateOne(
    { _id: new ObjectId(queueId) },
    { $push: { songs: new ObjectId(songId) } }
  );
}

export async function removeSongFromQueue(queueId: string, songId: string) {
  const db = await connectDB();
  await db.collection<Queue>(collectionName).updateOne(
    { _id: new ObjectId(queueId) },
    { $pull: { songs: new ObjectId(songId) } }
  );
}

export async function getQueueSongs(queueId: string) {
  const db = await connectDB();
  const queue = await db.collection<Queue>(collectionName).findOne({ _id: new ObjectId(queueId) });
  return queue?.songs || [];
}