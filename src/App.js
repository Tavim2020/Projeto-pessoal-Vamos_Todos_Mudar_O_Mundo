import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import './App.css';
import Sobre from './Pages/Sobre';
import Contribuir from './Pages/Contribuir';
import Contato from './Pages/Contato';
import Galeria from './Pages/Galeria';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';

function App() {

  const [statePageNotFound, setStatePageNotFound] = React.useState(false);

  React.useEffect(()=>{
    if(window.location.pathname === '/' || window.location.pathname === '/sobre' || 
    window.location.pathname === '/contribuir' || window.location.pathname === '/contato' || 
    window.location.pathname === '/galeria'){
      setStatePageNotFound(false);
    }
    else{
      setStatePageNotFound(true);
    }
  }, [statePageNotFound]);



  return (
    <div className="App">
      <BrowserRouter>
        {!statePageNotFound && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contribuir' element={<Contribuir />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {!statePageNotFound && <Footer /> }
      </BrowserRouter>
    </div>
  );
}

export default App;
