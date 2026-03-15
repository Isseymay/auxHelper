import { connectDB } from "./db";
import { Party } from "./models";
import { ObjectId } from "mongodb";
import { createQueue } from "./queue";

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

export async function joinParty(code: string){
  // return queueId & party name if code in db
  const db = await connectDB();
  const result = await db.collection<Party>("parties").findOne(
    {partyCode:code}, //query
    {projection: {queueId:1, name:1}} // projection?
  );
  if (result){
    return result.queueId;
  } else{
    return null;
  }
}