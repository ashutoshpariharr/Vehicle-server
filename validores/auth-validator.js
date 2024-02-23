const { z } = require("zod");

const signupSchema = z.object({
  email: z
    .string()
    .min(10, { message: "Email content should be at least 10 characters long" })
    .max(100, { message: "Email content should not exceed 100 characters" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" })
    .max(50, { message: "Password should not exceed 50 characters" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

module.exports = { signupSchema, loginSchema };
