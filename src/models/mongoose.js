import mongoose from 'mongoose';
import { config } from '../config/config.js';

export default async function connectMongo() {
    try {
        await mongoose.connect(config.database.uri);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("unable to connect to  MongoDB(i dont know what is wrong)\n", err);
    }
}