import { z } from "zod";

export const userSchema = z.object({
	id: z.string(),
	email: z.string().email(),
	createdAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

export const createUserSchema = userSchema
	.pick({ id: true, email: true })
	.merge(z.object({ createdAt: z.date() }));

export type CreateUser = z.infer<typeof createUserSchema>;
