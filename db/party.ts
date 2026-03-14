import { connectDB } from "./db";
import { Party } from "./models";

export async function createParty(party: Party) {
  const db = await connectDB();
  const result = await db.collection<Party>("parties").insertOne(party);
  return result.insertedId;
}