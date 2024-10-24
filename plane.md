# Things that need to done in backend
please read this file in vs code having formatting issue in File Structure on github 
## 1) Model
admin model, project model 
## 2) admin auth











# File structure 
/project-root
├── /config            # Configuration files (e.g., database, environment)
│   └── config.js      
│
├── /controllers       # Application logic, handling requests and responses
│   ├── userController.js
│   └── authController.js
│
├── /middleware        # Custom middleware functions
│   ├── authMiddleware.js
│   └── errorHandler.js
│
├── /models            # Database models (e.g., Mongoose or Sequelize)
│   ├── userModel.js   # in our case its only for admin 
│
├── /routes            # Express routes, separated by resource
│
├── /utils             # Utility/helper functions (e.g., formatting, validation)
│
├── app.js             # Main Express app entry point
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
└── Plane.md          # Project documentation

