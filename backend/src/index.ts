import express from 'express';
import sequelize from './database/database';
import dotenv from 'dotenv';
import cors from 'cors';
import animalRoutes from './routes/AnimalRoutes';
import { Animal } from './models/Animal';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/animals', animalRoutes);

sequelize.addModels([Animal]);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
