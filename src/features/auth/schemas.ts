import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Required' }),
})

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Minimum 8 characters required' }),
})
