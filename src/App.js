
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
