import { connectDB } from "./db";
import { Song } from "./models";

export async function createSong(song: Song) {
  const db = await connectDB();
  const result = await db.collection<Song>("songs").insertOne(song);
  return result.insertedId;
}