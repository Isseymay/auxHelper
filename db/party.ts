import { prototype } from "events";
import { connectDB } from "./db";
import { Party } from "./models";
import { createQueue } from "./queue";
import { ObjectId } from "mongodb";

// export interface Party {
//   _id?: ObjectId;
//   partyCode: string;
//   name: string;
//   hostId: ObjectId;
//   queueId: ObjectId; // required
// }

export async function createParty(party: Party) {
  const db = await connectDB();
  const result = await db.collection<Party>("parties").insertOne(party);
  return result.insertedId;
}

export default async function clientCreateParty(hostId:ObjectId, name:string){
  // generate 6 digit letter codes
  var code = ""
  for (var i=0; i<6; i++){
    var letterASCII = 65 + getRandomInt(0,25);
    var letter = String.fromCharCode(letterASCII);
    code+=letter;
  }
  var queueId:ObjectId = await createQueue(null);
  var newParty:Party = {
    partyCode: code,
    name: name,
    hostId: hostId,
    queueId:queueId,
  }
  return createParty(newParty);
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}