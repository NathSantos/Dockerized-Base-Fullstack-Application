import './AnimalEditComponent.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AnimalDTO } from '../../dto/AnimalDTO';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';

function AnimalEditComponent() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<AnimalDTO>();
  const navigate = useNavigate();

  async function editAnimal() {
    try {
      const animalData = {
        common_name: animal?.common_name,
        scientific_name: animal?.scientific_name,
        life_expectancy: animal?.life_expectancy,
        habitat: animal?.habitat,
      };

      await ApiService.put(
        `${import.meta.env.VITE_ANIMALS_ROUTE}/${id}`,
        animalData
      );

      navigate(-1);
    } catch (error) {
      console.error('Error editing animal:', error);
    }
  }

  useEffect(() => {
    async function fetchAnimal() {
      try {
        const response = await ApiService.get(
          `${import.meta.env.VITE_ANIMALS_ROUTE}/${id}`
        );
        setAnimal(response.data);
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    }

    fetchAnimal();
  }, [id]);

  return (
    <div className='edit-parent-container'>
      <div className='edit-title-container'>
        <Link to={`/`}>
          <button className='back-btn'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </Link>
        <h1>Edit Animal</h1>
      </div>
      <div className='edit-form'>
        {animal ? (
          <form onSubmit={editAnimal}>
            <div className='form-group'>
              <label htmlFor='common_name'>Common Name:</label>
              <input
                type='text'
                id='common_name'
                value={animal.common_name}
                onChange={(e) =>
                  setAnimal({ ...animal, common_name: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              <label htmlFor='scientific_name'>Scientific Name:</label>
              <input
                type='text'
                id='scientific_name'
                value={animal.scientific_name}
                onChange={(e) =>
                  setAnimal({ ...animal, scientific_name: e.target.value })
                }
              />
            </div>
            <div className='form-group'>
              <label htmlFor='life_expectancy'>Life Expectancy:</label>
              <input
                type='number'
                id='life_expectancy'
                value={animal.life_expectancy}
                onChange={(e) =>
                  setAnimal({
                    ...animal,
                    life_expectancy: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className='form-group'>
              <label htmlFor='habitat'>Habitat:</label>
              <input
                type='text'
                id='habitat'
                value={animal.habitat}
                onChange={(e) =>
                  setAnimal({ ...animal, habitat: e.target.value })
                }
              />
            </div>
            <button className='save-edit-btn' type='submit'>
              Save Changes
            </button>
          </form>
        ) : (
          <p>Loading animal data...</p>
        )}
      </div>
    </div>
  );
}

export default AnimalEditComponent;
