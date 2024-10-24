require('dotenv').config();  // Loads environment variables from a .env file

export const config = {
    environment: process.env.NODE_ENV || 'development', //  ('development', 'production', 'test') , we will use 'development' as default and test wont be used as we r not testing lol  "test in production "

    server: {
        port: process.env.PORT || 3000, // Port to run the server on defaulting to 3000 if not provided
    },


    database: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017/myapp', // using mongo
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },


    auth: {
        jwtSecret: process.env.JWT_SECRET || 'DSASuck',
        tokenExpiration: '1h',
    },
};

