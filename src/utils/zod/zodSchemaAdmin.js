import { z } from 'zod';

const adminSchema = z.object({
    username: z.string().min(1, { message: 'Username is required' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
});

// Export the Zod schema for use in your application
export default adminSchema;
