import './AnimalCreateComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import { CreateAnimalDTO } from '../../dto/CreateAnimalDTO';
import { useState } from 'react';
import ApiService from '../../services/ApiService';

function AnimalCreateComponent() {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState<string>('');
  const [animal, setAnimal] = useState<CreateAnimalDTO>({
    common_name: '',
    scientific_name: '',
    life_expectancy: 0,
    habitat: '',
  });

  async function createAnimal() {
    try {
      const animalData = {
        common_name: animal?.common_name,
        scientific_name: animal?.scientific_name,
        life_expectancy: animal?.life_expectancy,
        habitat: animal?.habitat,
      };

      await ApiService.post(
        `${import.meta.env.VITE_ANIMALS_ROUTE}`,
        animalData
      );

      navigate(-1);
    } catch (error) {
      console.error('Error creating animal:', error);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      animal.common_name &&
      animal.scientific_name &&
      animal.life_expectancy &&
      animal.habitat
    ) {
      createAnimal();
    } else {
      setErrMessage('Please fill in all fields.');
    }
  }

  return (
    <div className='create-parent-container'>
      <div className='create-title-container'>
        <Link to={`/`}>
          <button className='back-btn'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </Link>
        <h1>Create Animal</h1>
      </div>
      <div className='create-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='common_name'>Common Name:</label>
            <input
              type='text'
              id='common_name'
              placeholder='Enter the commom name ...'
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
              placeholder='Enter the scientific name ...'
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
              placeholder='Enter the life expectancy ...'
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
              placeholder='Enter the habitat ...'
              onChange={(e) =>
                setAnimal({ ...animal, habitat: e.target.value })
              }
            />
          </div>
          <button className='save-create-btn' type='submit'>
            Save Changes
          </button>
          {errMessage && <p className='error-message'>{errMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default AnimalCreateComponent;
