import { connectDB } from "./db";
import { Party } from "./models";
import { ObjectId } from "mongodb";

const collectionName = "parties";

export async function createParty(party: Party) {
  const db = await connectDB();
  const result = await db.collection<Party>(collectionName).insertOne(party);
  return result.insertedId;
}

export async function getPartyByCode(code: string){
    const db = await connectDB();
    return db.collection<Party>(collectionName).findOne({ partyCode: code });
}

export async function addMember(partyId: string, userId: string){
    const db = await connectDB();
    await db.collection<Party>(collectionName).updateOne(
    { _id: new ObjectId(partyId) },
    { $addToSet: { members: new ObjectId(userId) } }
  );
}

export async function removeMember(partyId: string, userId: string) {
  const db = await connectDB();
  await db.collection<Party>("parties").updateOne(
    { _id: new ObjectId(partyId) },
    { $pull: { members: new ObjectId(userId) } }
  );
}