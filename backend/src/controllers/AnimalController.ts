import { Request, Response } from 'express';
import { Animal } from '../models/Animal';

export class AnimalController {
  async createAnimal(req: Request, res: Response) {
    try {
      const { common_name, scientific_name, life_expectancy, habitat } =
        req.body;

      const newAnimal = await Animal.create({
        common_name,
        scientific_name,
        life_expectancy,
        habitat,
      });

      res.status(201).json(newAnimal);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async getAllAnimals(req: Request, res: Response) {
    try {
      const animals = await Animal.findAll();
      res.json(animals);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async getAnimalById(req: Request, res: Response) {
    try {
      const animal = await Animal.findOne({
        where: { id: req.params.id },
      });

      if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
      }

      res.json(animal);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async updateAnimal(req: Request, res: Response) {
    try {
      const { common_name, scientific_name, life_expectancy, habitat } =
        req.body;

      const animal = await Animal.findByPk(req.params.id);

      if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
      }

      animal.common_name = common_name || animal.common_name;
      animal.scientific_name = scientific_name || animal.scientific_name;
      animal.life_expectancy = life_expectancy || animal.life_expectancy;
      animal.habitat = habitat || animal.habitat;

      await animal.save();

      res.json(animal);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  async deleteAnimal(req: Request, res: Response) {
    try {
      const animal = await Animal.findByPk(req.params.id);

      if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
      }

      await animal.destroy();

      res.json({ message: 'Animal deleted successfully' });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
