"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const Animal_1 = require("../models/Animal");
class AnimalController {
    createAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { common_name, scientific_name, life_expectancy, habitat } = req.body;
                const newAnimal = yield Animal_1.Animal.create({
                    common_name,
                    scientific_name,
                    life_expectancy,
                    habitat,
                });
                res.status(201).json(newAnimal);
            }
            catch (e) {
                res.status(500).json({ error: e.message });
            }
        });
    }
    getAllAnimals(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animals = yield Animal_1.Animal.findAll();
                res.json(animals);
            }
            catch (e) {
                res.status(500).json({ error: e.message });
            }
        });
    }
    getAnimalById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animal = yield Animal_1.Animal.findOne({
                    where: { id: req.params.id },
                });
                if (!animal) {
                    return res.status(404).json({ error: 'Animal not found' });
                }
                res.json(animal);
            }
            catch (e) {
                res.status(500).json({ error: e.message });
            }
        });
    }
    updateAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { common_name, scientific_name, life_expectancy, habitat } = req.body;
                const animal = yield Animal_1.Animal.findByPk(req.params.id);
                if (!animal) {
                    return res.status(404).json({ error: 'Animal not found' });
                }
                animal.common_name = common_name || animal.common_name;
                animal.scientific_name = scientific_name || animal.scientific_name;
                animal.life_expectancy = life_expectancy || animal.life_expectancy;
                animal.habitat = habitat || animal.habitat;
                yield animal.save();
                res.json(animal);
            }
            catch (e) {
                res.status(500).json({ error: e.message });
            }
        });
    }
    deleteAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animal = yield Animal_1.Animal.findByPk(req.params.id);
                if (!animal) {
                    return res.status(404).json({ error: 'Animal not found' });
                }
                yield animal.destroy();
                res.json({ message: 'Animal deleted successfully' });
            }
            catch (e) {
                res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.AnimalController = AnimalController;
