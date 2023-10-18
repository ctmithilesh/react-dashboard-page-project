import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboad from './Components/Dashboad';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboad />} />
    </Routes>
  );
}

export default App;
