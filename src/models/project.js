import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: { // stores the status of the project wether its ongoing or finished true = finished, false = ongoing
        type: Boolean,
        required: true,
    },
    display: {
        type: Boolean,
        default: true
    },
    imageData: {
        profileImage: {
            imageName: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                required: true,
            },
            imageOrder: {
                type: Number,
            }

        },
        normalImages: [
            {
                imageName: {
                    type: String,
                    required: true,
                },
                imageUrl: {
                    type: String,
                    required: true,
                },
                imageOrder: {
                    type: Number,
                }
            }
        ]
    },
    videoData: [{
        videoName: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        videoOrder: {
            type: Number,
        }
    }]
}, {
    timestamps: true
});

export default mongoose.model('Project', projectSchema);
