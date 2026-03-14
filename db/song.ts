import { ObjectId } from "mongodb";
import { connectDB } from "./db";
import { Song } from "./models";

const collectionName = "songs"

export async function createSong(song: Song) {
  const db = await connectDB();
  const result = await db.collection<Song>(collectionName).insertOne(song);
  return result.insertedId;
}

export async function upvoteSong(songId: string){
  const db = await connectDB();
  await db.collection<Song>(collectionName).updateOne(
    { _id: new ObjectId(songId) },
    { $inc: { upvotes: 1 } }
  );
}

export async function downvoteSong(songId: string){
  const db = await connectDB();
  await db.collection<Song>(collectionName).updateOne(
    { _id: new ObjectId(songId) },
    { $inc: { downvotes: 1 } }
  );
}

export async function getSongById(songId: string){
  const db = await connectDB();
  return db.collection<Song>(collectionName).findOne({ _id: new ObjectId(songId) });
}