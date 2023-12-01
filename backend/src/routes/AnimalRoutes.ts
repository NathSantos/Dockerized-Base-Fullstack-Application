import express from 'express';
import { AnimalController } from '../controllers/AnimalController';

const router = express.Router();
const animalController = new AnimalController();

router.post('/', animalController.createAnimal);
router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

export default router;
