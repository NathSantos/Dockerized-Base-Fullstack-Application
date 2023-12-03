import './AnimalListComponent.css';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import { AnimalDTO } from '../../dto/AnimalDTO';
import { Link } from 'react-router-dom';

function AnimalListComponent() {
  const [animals, setAnimals] = useState<AnimalDTO[]>([]);

  async function deleteAnimal(animalId: number) {
    try {
      await ApiService.delete(
        `${import.meta.env.VITE_ANIMALS_ROUTE}/${animalId}`
      );
      const updatedAnimals = animals.filter((animal) => animal.id !== animalId);
      setAnimals(updatedAnimals);
    } catch (error) {
      console.error('Error deleting animal:', error);
    }
  }

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
    <div className='parent-container'>
      <div className='title-container'>
        <h1>Marine Animals</h1>
        <Link to={`/create-animal`}>
          <button className='crud-btn'>
            <i className='fa-solid fa-plus'></i>
          </button>
        </Link>
      </div>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Common Name</th>
            <th>Scientific Name</th>
            <th>Life Expectancy</th>
            <th>Habitat</th>
            <th id='header-actions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal: AnimalDTO) => (
            <tr key={animal.id}>
              <td>{animal.common_name}</td>
              <td>{animal.scientific_name}</td>
              <td>{animal.life_expectancy} years</td>
              <td>{animal.habitat}</td>
              <td id='row-actions'>
                <Link to={`/view-animal/${animal.id}`}>
                  <button className='crud-btn'>
                    <i className='fa-solid fa-eye'></i>
                  </button>
                </Link>
                <Link to={`/edit-animal/${animal.id}`}>
                  <button className='crud-btn'>
                    <i className='fa-solid fa-pencil'></i>
                  </button>
                </Link>
                <button
                  className='crud-btn'
                  onClick={() => deleteAnimal(animal.id)}
                >
                  <i className='fa-solid fa-trash'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalListComponent;
