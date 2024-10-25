import express from 'express';
import { config } from './src/config/config.js';
import path from 'path';
import connectMongo from './src/models/mongoose.js';
// import mongoSanitize from "express-mongo-sanitize";
// import methodOverride from 'method-override'
// import cookieParser from "cookie-parser";
import adminRouter from './src/routes/admin.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
connectMongo();


// some middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser())
// app.use(methodOverride("_method"));
// app.use(mongoSanitize());

app.use(adminRouter);

app.disable('x-powered-by');
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).render("404", { url: req.originalUrl });
  });
  
// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

const port = 3000;
app.listen(config.server.port, () => {
    console.log(`Server is running on http://localhost:${config.server.port}`);
});
