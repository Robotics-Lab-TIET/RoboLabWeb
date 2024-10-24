import mongoose from 'mongoose';
import { config } from '../config/config.js';

export default async function connectMongo() {
    try {
        await mongoose.connect(config.DB_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Could not connect to MongoDB. Error:\n", err);
    }
}