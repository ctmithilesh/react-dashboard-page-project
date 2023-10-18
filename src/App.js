import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Dashboard  from './Components/Dashboard'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
