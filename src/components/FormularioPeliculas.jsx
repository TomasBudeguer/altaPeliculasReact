import { useEffect, useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const FormularioPeliculas = () => {
  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("arregloPeliculasKey")) || [];

  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [arregloPeliculas, setArregloPeliculas] = useState(peliculasLocalStorage);

  const UrlRegExp = new RegExp(/^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/);

  useEffect(() => {
    localStorage.setItem(
      "arregloPeliculasKey",
      JSON.stringify(arregloPeliculas)
    );
  }, [arregloPeliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      !UrlRegExp.test(imagen) ||
      descripcion.trim() === "" ||
      genero.trim() === ""
    ) {
      alert("corregir datos");
    } else {
      let objetoPelicula = { nombre, imagen, descripcion, genero };
      setArregloPeliculas([...arregloPeliculas, objetoPelicula]);
      setNombre("");
      setImagen("");
      setDescripcion("");
      setGenero("");
    }
  };

  const borrarPelicula = (pelicula) => {
    let arregloModif = arregloPeliculas.filter((item) => item !== pelicula);
    setArregloPeliculas(arregloModif);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Spider Man"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://es.web.img2.acsta.net/pictures/19/11/12/12/25/0815514.jpg"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
            required
          />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Descripcion"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Escribe la descripcion aca"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Genero:">
          <Form.Select
            aria-label="Floating label select example"
            className="mb-3"
            onChange={(e) => setGenero(e.target.value)}
            value={genero}
            required
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
      <ListaPeliculas
        arregloPeliculas={arregloPeliculas}
        borrarPelicula={borrarPelicula}
      ></ListaPeliculas>
    </div>
  );
};

export default FormularioPeliculas;
