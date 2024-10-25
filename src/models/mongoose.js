import mongoose from 'mongoose';
import { config } from '../config/config.js';

export default async function connectMongo() {
    try {
        await mongoose.connect(config.DB_URI);
        console.log("unable to connect to  MongoDB(i dont know what is wrong)");
    } catch (err) {
        console.log("Could not connect to MongoDB. Error:\n", err);
    }
}