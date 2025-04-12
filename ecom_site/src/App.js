import './App.css';
import NavBarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';

function App() {
  return (
    <Container>
      <NavBarComponent>
      </NavBarComponent>
      <BrowserRouter>
        <Routes>
          {/* Each of these are a different web page */} 
          <Route path='store' element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
