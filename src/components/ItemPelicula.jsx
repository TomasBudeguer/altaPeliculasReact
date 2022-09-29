import { Card } from "react-bootstrap";

const ItemPelicula = () => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <Card>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemPelicula;
