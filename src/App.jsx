import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import FormularioPeliculas from './components/FormularioPeliculas';

function App() {
  return (
    <Container className='my-5'>
      <h1>Alta de peliculas</h1>
      <hr />
      <FormularioPeliculas></FormularioPeliculas>
    </Container>
  );
}

export default App;
