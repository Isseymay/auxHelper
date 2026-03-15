import { ObjectId } from "mongodb";
import { connectDB } from "./db";
import { Queue, Song } from "./models";
import { deleteSong } from "./queue";

export async function createSong(song: Song) {
  const db = await connectDB();
  const result = await db.collection<Song>("songs").insertOne(song);
  return result.insertedId;
}

export async function upVote(songSpotify:number, queueId:ObjectId){
  const song = await getIdfromSpotifyandQueue(songSpotify,queueId);
  const db = await connectDB();
  await db.collection<Song>("songs").updateOne(
    {"_id":song},
    {$inc: {upvotes:1}}
  )
  return;
}

export async function downVote(songSpotify:number, queueId:ObjectId){
  const song = await getIdfromSpotifyandQueue(songSpotify,queueId);
  const db = await connectDB();
  await db.collection<Song>("songs").updateOne(
    {"_id":song},
    {$inc: {downvotes:1}}
  )
  const curDownVotes = await db.collection<Song>("songs").findOne(
    {_id:song}, //query
    {projection: {downvotes:1, _id:1}} // projection?
  );
  if (curDownVotes && curDownVotes.downvotes>5){
    deleteSong(song,queueId);
  }
  return;
 
}

export async function getSongsByQueueID(queueId:ObjectId){
  const db = await connectDB();
  const queueSongs = await db.collection<Queue>("queues").findOne(
    {_id:queueId}, //query
    {projection: {songs:1, _id:1}} // projection?
  );
  if (queueSongs && Array.isArray(queueSongs.songs)) {
    return queueSongs.songs;
  }
  else{
    throw new Error("issue getting songs from queueId: "+queueId)
  }
}

export async function getSpotifyFromID(songId:ObjectId){
  const db = await connectDB();
  const spotifyId = await db.collection<Song>("songs").findOne(
    {_id:songId}, //query
    {projection: {spotifyId:1, _id:1}} // projection?
  );
  if (spotifyId && Number.isInteger(spotifyId)) {
    return spotifyId.spotifyId;
  }
  else{
    throw new Error("issue converting from id to spotify: "+songId)
  }
}

export async function getIdfromSpotifyandQueue(songSpotify:number,queueId:ObjectId){
  const queueSongs = await getSongsByQueueID(queueId);
  for (var song of queueSongs){
    const curSpotify = await getSpotifyFromID(song);
    if (curSpotify==songSpotify){
      return song;
    }
  }
  throw new Error("spotify not in queue: "+songSpotify+" "+queueId)
}