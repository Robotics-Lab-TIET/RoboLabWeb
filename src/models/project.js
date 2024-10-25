import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
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
        required: true,
        default: true
    },
    imageData: [{
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
            required: true,
        }
    }],
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
            required: true,
        }
    }]
}, {
    timestamps: true
});

export default mongoose.model('Project', projectSchema);
