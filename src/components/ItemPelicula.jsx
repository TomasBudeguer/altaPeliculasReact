import { Card, Button, Badge } from "react-bootstrap";

const ItemPelicula = ({ pelicula, nombre, imagen, descripcion, genero, borrarPelicula }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <Card>
        <Card.Img variant="top" src={imagen}/>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <aside>
              <Card.Title>{nombre}</Card.Title>
            </aside>
            <aside>
              <Badge bg="danger" className="text-center fs-6">
                {genero}
              </Badge>
            </aside>
          </div>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <hr />
          <div className="text-center">
            <Button variant="primary" onClick={()=> borrarPelicula(pelicula)}>Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemPelicula;
