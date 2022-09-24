import { Form, Button, FloatingLabel } from "react-bootstrap";

const FormularioPeliculas = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Juan Bautista" />
      </Form.Group>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Descripcion"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Escribe la descripcion aca" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Genero:">
        <Form.Select
          aria-label="Floating label select example"
          className="mb-3"
        >
          <option>Seleccione el genero</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Infantil">Infantil</option>
        </Form.Select>
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioPeliculas;
