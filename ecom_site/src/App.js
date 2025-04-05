import './App.css';
import NavBarComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <NavBarComponent>

      </NavBarComponent>
    </Container>
  );
}

export default App;
