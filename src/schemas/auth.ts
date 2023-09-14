import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: "Email is required.",
    })
    .email({
      message: "Invalid email.",
    }),
  password: z
    .string()
    .nonempty({
      message: "Password is required.",
    })
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(12, {
      message: "Password must be less than 12 characters.",
    }),
});

const registerSchema = z
  .object({
    firstName: z.string().nonempty({
      message: "First name is required.",
    }),
    lastName: z.string().nonempty({
      message: "Last name is required.",
    }),
    email: z
      .string()
      .nonempty({
        message: "Email is required.",
      })
      .email({
        message: "Invalid email.",
      }),
    phone: z
      .string()
      .nonempty({
        message: "Phone is required.",
      })
      .min(10, {
        message: "Phone must be at least 10 characters.",
      })
      .max(10, {
        message: "Phone must be less than 10 characters.",
      }),
    password: z
      .string()
      .nonempty({
        message: "Password is required.",
      })
      .min(6, {
        message: "Password must be at least 6 characters.",
      })
      .max(12, {
        message: "Password must be less than 12 characters.",
      }),
    confirmPassword: z
      .string()
      .nonempty({
        message: "Confirm password is required.",
      })
      .min(6, {
        message: "Password must be at least 6 characters.",
      })
      .max(12, {
        message: "Password must be less than 12 characters.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export { loginSchema, registerSchema };
