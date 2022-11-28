// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import AppRouter  from './components/router/router';
import Menu  from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Container>
        <Menu />
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
