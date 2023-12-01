"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AnimalController_1 = require("../controllers/AnimalController");
const router = express_1.default.Router();
const animalController = new AnimalController_1.AnimalController();
router.post('/', animalController.createAnimal);
router.get('/', animalController.getAllAnimals);
router.get('/:id', animalController.getAnimalById);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);
exports.default = router;
