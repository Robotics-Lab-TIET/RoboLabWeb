import mongoose from "mongoose";
import Admin from "../models/admin.js"; // Rename the import to 'Admin' to avoid conflicts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import projectSchema from "../utils/zod/zodSchemaProject.js";
import { config } from "../config/config.js";
import multer from "multer";
import path from "path";

const upload = multer({ dest: 'uploads/' })
const router = express.Router();


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

const cpUploads = upload.fields([
    {
        name: 'profileImage', maxCount: 1
    }
])


router.route('/projects')

    .post(cpUploads, async (req, res) => {
    //     try {
    //         // Parse request body with Zod validation
    //         const { name, description, status, display } = projectSchema.parse(req.body);

    //         // Create a new project
    //         const project = new Project({
    //             name,
    //             description,
    //             status,
    //             display,
    //         });

    //         // Save the project to the database
    //         await project.save();
    //         res.send(`Project ${name} saved successfully`);

    //     } catch (err) {
    //         console.error("Error during project creation:", err);
    //         res.status(500).send("An error occurred during project creation");
    //     }
    // }
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