import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
    .string()
    .default('3030')
    .refine((val) => Number(val)),
  JWT_SECRET: z.string(),
  REDIS_URL: z.string(),
  REDIS_PASS: z.string(),
  AUTH_SERVICE_URL: z.string(),
  CORE_SERVICE_URL: z.string(),
  PAYMENT_SERVICE_URL: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET
  },
  redis: {
    url: envVars.REDIS_URL,
    pass: envVars.REDIS_PASS
  },
  cloudinary: {
    cloud_name: envVars.CLOUDINARY_CLOUD_NAME,
    api_key: envVars.CLOUDINARY_API_KEY,
    api_secret: envVars.CLOUDINARY_API_SECRET
  },
  authServiceUrl: envVars.AUTH_SERVICE_URL,
  coreServiceUrl: envVars.CORE_SERVICE_URL,
  paymentServiceUrl: envVars.PAYMENT_SERVICE_URL
};
