import { z } from 'zod';

const imageDataSchema = z.object({
    imageName: z.string().min(1, { message: 'Image name is required' }),
    imageUrl: z.string().url({ message: 'Invalid image URL' }),
    imageOrder: z.number().int().nonnegative({ message: 'Image order must be a non-negative integer' }),
});

const videoDataSchema = z.object({
    videoName: z.string().min(1, { message: 'Video name is required' }),
    videoUrl: z.string().url({ message: 'Invalid video URL' }),
    videoOrder: z.number().int().nonnegative({ message: 'Video order must be a non-negative integer' }),
});

const projectSchema = z.object({
    name: z.string().min(1, { message: 'Project name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    status: z.boolean(), // Status as boolean
    display: z.boolean().default(true), // Display field with default value
    imageData: z.array(imageDataSchema), // Array of image data
    videoData: z.array(videoDataSchema), // Array of video data
});

// Export the Zod schema for use in your application
export default projectSchema;
