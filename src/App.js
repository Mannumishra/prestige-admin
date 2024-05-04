
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  
  return (
    <>

      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
