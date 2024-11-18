import mongoose from "mongoose";
import Admin from "../models/admin.js"; // Rename the import to 'Admin' to avoid conflicts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import projectSchema from "../utils/zod/zodSchemaProject.js";
import { config } from "../config/config.js";
import multer from "multer";
import storage from "../utils/multer/storage.js";

const upload = multer({ dest: 'uploads/' })
const router = express.Router();


const cpUpload = multer({
    storage: storage
}).fields([{ name: 'profileImage', maxCount: 3 }]); // Specify expected fields here


router.route('/projects')

    .post(cpUpload, async (req, res) => {


        res.send(req.files);
    })
// .get(async (req, res) => {
//     try {
//         const projects = await Project.find();
//         res.send(projects);
//     } catch (err) {
//         console.error("Error during fetching projects:", err);
//         res.status(500).send("An error occurred during fetching projects");
//     }
// }
// .delete (async (req, res) => {
//         try {

//         }
// }
export default router;