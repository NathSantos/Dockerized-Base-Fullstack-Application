import './AnimalViewComponent.css';
import { Link, useParams } from 'react-router-dom';
import { AnimalDTO } from '../../dto/AnimalDTO';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';

function AnimalViewComponent() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<AnimalDTO>();

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
    <div className='view-parent-container'>
      <div className='view-title-container'>
        <Link to={`/`}>
          <button className='back-btn'>
            <i className='fa-solid fa-arrow-left'></i>
          </button>
        </Link>
        <h1>Animal Details</h1>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td className='column-header'>Common Name:</td>
              <td>{animal?.common_name}</td>
            </tr>
            <tr>
              <td className='column-header'>Scientific Name:</td>
              <td>{animal?.scientific_name}</td>
            </tr>
            <tr>
              <td className='column-header'>Life Expectancy:</td>
              <td>{animal?.life_expectancy} years</td>
            </tr>
            <tr>
              <td className='column-header'>Habitat:</td>
              <td>{animal?.habitat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnimalViewComponent;
