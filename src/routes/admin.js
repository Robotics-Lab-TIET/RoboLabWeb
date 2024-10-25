import mongoose from "mongoose";
import Admin from "../models/admin.js"; // Rename the import to 'Admin' to avoid conflicts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import adminSchema from "../utils/zod/zodSchemaAdmin.js";
import dotenv from "dotenv";
import { config } from "../config/config.js";

dotenv.config();

const router = express.Router();

router.route("/login")
    .post(async (req, res) => { 

        try {
            // Parse request body with Zod validation
            const { username, password } = adminSchema.parse(req.body);

            // Check for the user in the database
            const adminUser = await Admin.findOne({ username });
            if (!adminUser) {
                return res.status(400).send("Invalid credentials");
            }

            // Validate password
            const validPassword = await bcrypt.compare(password, adminUser.password);
            if (!validPassword) {
                return res.status(400).send("Invalid credentials");
            }

            // Generate JWT token
            const token = jwt.sign({ username: adminUser.username }, config.auth.jwtSecret, {
                expiresIn: config.auth.tokenExpiration
            });
            res.send({ token });

        } catch (err) {
            console.error("Error during login:", err);
            res.status(500).send("An error occurred during login");
        }
    });

export default router;
