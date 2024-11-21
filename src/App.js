import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Gallery } from './components/Gallery';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Gallery/>} />
    <Route path='/about' element={<About/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
