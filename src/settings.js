import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const userEmail = process.env.USER_EMAIL;
export const connectionString = 'mysql://woordenfabriekdb2:Andateam22!@34.141.207.214/woordenfabriek';
export const secret = 'Super secret for the lazy brown fox in any string';
