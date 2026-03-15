import { prototype } from "events";
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

export async function getPartyCode(id:ObjectId){
  const db = await connectDB();
  const result = await db.collection<Party>("parties").findOne(
    {_id:id}, //query
    {projection: {partyCode:1, _id:0}} // projection?
  );
  if(result && typeof(result.partyCode)==="string"){
    return result.partyCode
  }
  else{
    throw new Error("Error translating to code: "+id)
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

export async function joinParty(code: string){
  // return party_id
  const db = await connectDB();
  const result = await db.collection<Party>("parties").findOne(
    {partyCode:code}, //query
    {projection: {}} // projection?
  );
  if (result){
    return result._id;
  } else{
    return null;
  }
}

export async function getQueueFromParty(party:ObjectId){
  const db = await connectDB()
  const result = await db.collection<Party>("parties").findOne(
    {_id:party},
    {projection: {queueId:1, _id:0}}
  );
  if (result){
    return result.queueId;
  } else{
    throw new Error("No queue attatched to party of id: "+party);
  }
}