import express from 'express';
import sequelize from './database/database';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
