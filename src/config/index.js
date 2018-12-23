const Joi = require('joi');
const dbConfig = require('./db');
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'staging']).default('development'),
  APP_PORT: Joi.number().default(3001),
  DATABASE_URL: Joi.string().required().description('DB_NAME is required.'),
}).unknown().required();

const {
  error,
  value: envVars
} = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

dbConfig.url = envVars.DATABASE_URL;

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.APP_PORT,
  db: dbConfig
};
