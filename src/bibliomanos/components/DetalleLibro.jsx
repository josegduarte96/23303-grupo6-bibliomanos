// Detalle de libro, imagen, descripcion, boton de favoritos
// import {Link} from 'react-router-dom';
import { Card, Row, Col, Button } from "react-bootstrap"

function DetalleLibro() {
  return (
    <div className="card mx-auto mt-3 shadow" style={{ maxWidth: "80vw" }}>
      <Row className="g-0">
        <Col md={4}>
          <Card.Img
            src="https://covers.openlibrary.org/b/id/12547191-L.jpg"
            className="img-fluid mx-auto"
            alt="portada del libro"
          />
        </Col>
        <Col md={8}>
          <div className="card-body">
            <Card.Title>TITULO DEL LIBRO</Card.Title>
            <Card.Subtitle className="mb-2 text-body-secondary">Autor del libro</Card.Subtitle>
            <Card.Text>
              {" "}
              RESUMEN DEL LIBRO Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore quidem non neque
              veniam vel perferendis minima facilis. Vel ratione suscipit dicta voluptate nemo molestias quibusdam
              inventore quo natus eligendi?{" "}
            </Card.Text>
            <div className="d-grid gap-2 d-md-block mt-5">
              <Button href="#" className="btn mx-2">
                {" "}
                Leer
              </Button>

              <Button href="#" className="btn mx-2">
                Favoritos
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Link to="/DetalleLibro"></Link>  */}
    </div>
  )
}

export default DetalleLibro
