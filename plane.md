
# Things that need to done in backend

please read this file in vs code having formatting issue in File Structure on github (install any markdown preview extension)

## 1) Model

admin model, project model

## 2) Routes

/projects with (CRUD)
/adminlogin (to loginto admin dashboard)
/admin register (only in dev mode )

## 3) Auth

auth for admin dashboard will do basic jwt and refresh tokens if i have time


please do mention if u think anything needde to the backend

# File structure

/project-root
├── /config # Configuration files (e.g., database, environment)
│ └── config.js
│
├── /controllers # Application logic, handling requests and responses
│ ├── userController.js
│ └── authController.js
│
├── /middleware # Custom middleware functions
│ ├── authMiddleware.js
│ └── errorHandler.js
│
├── /models # Database models (e.g., Mongoose)
│ ├── admin.js # in our case its only for admin
│ ├── project.js
│
├── /routes # Express routes, separated by resource
│
├── /utils # Utility/helper functions (e.g., formatting, validation)
│
├── app.js # Main Express app entry point
├── .env # Environment variables
├── package.json # Project dependencies and scripts
└── Plane.md # Project documentation