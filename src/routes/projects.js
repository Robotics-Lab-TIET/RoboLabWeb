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

// const cpUploads = upload.fields([
//     {
//         name: 'profileImage', maxCount: 3
//     }
// ])
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const cpUpload = multer({
    storage: storage
}).fields([{ name: 'profileImage', maxCount: 3 }]); // Specify expected fields here

// const cpUpload = multer({ storage: storage })

router.route('/projects')

    .post(cpUpload, async (req, res) => {

        // {
        //     "profileImage": [
        //         {
        //             "fieldname": "profileImage",
        //             "originalname": "Screenshot 2024-10-19 212734.png",
        //             "encoding": "7bit",
        //             "mimetype": "image/png",
        //             "destination": "uploads/",
        //             "filename": "7a87fa9427946d54093de9fbb5585cfd",
        //             "path": "uploads/7a87fa9427946d54093de9fbb5585cfd",
        //             "size": 340802
        //         }
        //     ]
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