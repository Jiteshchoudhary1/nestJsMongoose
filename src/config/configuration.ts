import * as dotenv from 'dotenv';
dotenv.config();

export default {
  databaseConfig: {
    db_host: process.env.ASTROON_BACKEND_DB_HOST,
    db_port: parseInt(process.env.ASTROON_BACKEND_DB_PORT),
    db_name: process.env.ASTROON_BACKEND_DB_NAME,
    db_username: process.env.ASTROON_BACKEND_DB_USERNAME,
    db_password: process.env.ASTROON_BACKEND_DB_PASSWORD,
  },
  app: {
    nodeEnv: process.env.ASTROON_BACKEND_NODE_ENV,
    name: process.env.ASTROON_BACKEND_APP_NAME,
    port: parseInt(process.env.ASTROON_BACKEND_PORT, 10) || 3000,
    swagger: Boolean(process.env.ASTROON_BACKEND_SWAGGER_ENABLE || true),
    websiteUrl: process.env.ASTROON_BACKEND_WEBSITE_URL,
  },
  jwt: {
    secret: 'this is secret',
    expiresIn: '1d',
  },
  resetPasswordConfig: {
    secret: process.env.ASTROON_BACKEND_SECRET_KEY,
    expiresIn: process.env.ASTROON_BACKEND_SECRET_KEY_EXPIRE,
  },
};
