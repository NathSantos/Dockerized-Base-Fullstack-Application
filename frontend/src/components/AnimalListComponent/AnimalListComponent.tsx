import './AnimalListComponent.css';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import { AnimalDTO } from '../../dto/AnimalDTO';

function AnimalListComponent() {
  const [animals, setAnimals] = useState<AnimalDTO[]>([]);

  useEffect(() => {
    async function fetchAnimals() {
      try {
        const response = await ApiService.get(
          `${import.meta.env.VITE_ANIMALS_ROUTE}`
        );
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    }

    fetchAnimals();
  }, []);

  return (
    <div>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Common Name</th>
            <th>Scientific Name</th>
            <th>Life Expectancy</th>
            <th>Habitat</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal: AnimalDTO) => (
            <tr key={animal.id}>
              <td>{animal.common_name}</td>
              <td>{animal.scientific_name}</td>
              <td>{animal.life_expectancy} years</td>
              <td>{animal.habitat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalListComponent;
