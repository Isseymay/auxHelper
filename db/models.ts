import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    username: string;
    passwordHash: string;
    spotifyToken?: string;
}

export interface Party {
  _id?: ObjectId;
  partyCode: string;
  name: string;
  hostId: ObjectId;
  queueId: ObjectId;
  members: ObjectId[];  
}

export interface Queue {
  _id?: ObjectId;
  partyId: ObjectId;
  songs: ObjectId[];
}

export interface Song {
  _id?: ObjectId;
  queueId: ObjectId;
  name: string;
  artist: string;
  imagePath: string;
  spotifyId?: string;
  upvotes: number;
  downvotes: number;
}