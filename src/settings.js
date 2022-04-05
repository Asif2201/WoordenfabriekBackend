import dotenv from 'dotenv';

let x = '';

dotenv.config();
if (process.env.DATABASE_URL) {
  x = process.env.DATABASE_URL;
} else {
  x = process.env.CONNECTION_STRING;
}

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const userEmail = process.env.USER_EMAIL;
export const connectionString = x;
export const secret = 'Super secret for the lazy brown fox in any string';
