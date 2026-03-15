import { SongCard } from "@/app/Components/individual_search_element";
import { connectDB } from "./db";
import { Queue,Song } from "./models";
import { ObjectId } from "mongodb";
import { createSong, getIdfromSpotifyandQueue } from "./song";


export async function createQueue(queue: Queue|null) {
  if (queue == null){
    var newQ:Queue = {
      songs:[]
    }
    queue=newQ
  }
  const db = await connectDB();
  const result = await db.collection<Queue>("queues").insertOne(queue);
  return result.insertedId;
}

// export interface Song {
//   _id?: ObjectId;
//   queueId: ObjectId;
//   name: string;
//   artist: string;
//   image: string;
//   spotifyId?: string;
//   upvotes: number;
//   downvotes: number;
// }
export async function addSong(song: SongCard, queueId: ObjectId){
  // make a song and add it to the queue
  // using songcard as it's passed from search
  var newSong:Song = {
    queueId:queueId,
    name:song.name,
    artist:song.artist,
    image:song.imgURL,
    spotifyId:song.id,
    upvotes:0,
    downvotes:0
  };
  var songId = await createSong(newSong);
  const db = await connectDB();
  await db.collection<Queue>("queues").updateOne(
    {"_id":queueId},
    {$push: {"songs":songId}}
  );
}


// for both veto and over on downvotes
export async function deleteSong(song: ObjectId|number, queueId: ObjectId){
  // get song from spotify or regular id then delete from queue
  if (typeof song === "number" && Number.isInteger(song)){
    song = await getIdfromSpotifyandQueue(song, queueId);
  }
  const db = await connectDB();
  await db.collection<Queue>("queues").updateOne(
    {"_id":queueId},
    {$pull: {"songs":song}}
  );
}