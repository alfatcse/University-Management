import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
    .string()
    .default('5005')
    .refine((val) => Number(val)),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string(),
  REDIS_PASS: z.string(),
  JWT_SECRET: z.string(),
  STORE_ID: z.string(),
  STORE_PASSWORD: z.string(),
  PAYMENT_URL: z.string(),
  Validation_URL: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  db: {
    url: envVars.DATABASE_URL
  },
  redis: {
    url: envVars.REDIS_URL,
    pass:envVars.REDIS_PASS
  },
  jwt: {
    secret: envVars.JWT_SECRET,
  },
  ssl: {
    store_id: envVars.STORE_ID,
    store_Password: envVars.STORE_PASSWORD,
    payment_Url: envVars.PAYMENT_URL,
    Validation_Url: envVars.Validation_URL
  }
};
