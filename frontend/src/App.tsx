import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimalListComponent from './components/AnimalListComponent/AnimalListComponent';
import AnimalViewComponent from './components/AnimalViewComponent/AnimalViewComponent';
import AnimalEditComponent from './components/AnimalEditComponent/AnimalEditComponent';
import AnimalCreateComponent from './components/AnimalCreateComponent/AnimalCreateComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AnimalListComponent />} />
        <Route path='/view-animal/:id' element={<AnimalViewComponent />} />
        <Route path='/edit-animal/:id' element={<AnimalEditComponent />} />
        <Route path='/create-animal/' element={<AnimalCreateComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
