import mongoose from "mongoose";
import admin from "../models/admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import adminSchema from "../utils/zod/zodSchemaAdmin";
import dotenv from "dotenv";
import { config } from "../config/config";



const router = express.Router();

router.route("/login")
    .get(async (req, res) => {
        const { userName, password } = adminSchema.parse(req.body);
        const admin = await admin.findOne({ userName });
        if (!admin) {
            return res.status(400).send("Invalid credentials");
        }
        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(400).send("Invalid credentials");
        }
        const token = jwt.sign({ userName }, config.auth.jwtSecret);
        res.send({ token });

    });
    user=new admin({userName:devansh,password:pass});
    user.save();