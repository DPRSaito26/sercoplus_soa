import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const marcas = [
  { id: 1, nombre: "ACER", imagen: "./img/marcas/acer.jpg", alt: "ACER" },
  { id: 2, nombre: "AMD", imagen: "./img/marcas/amd.jpg", alt: "AMD" },
  { id: 3, nombre: "ASUS", imagen: "./img/marcas/asus.jpg", alt: "ASUS" },
  { id: 4, nombre: "CORSAIR", imagen: "./img/marcas/corsair.jpg", alt: "CORSAIR" },
  { id: 5, nombre: "HP", imagen: "./img/marcas/hp.jpg", alt: "HP" },
  { id: 6, nombre: "HYPERX", imagen: "./img/marcas/hyperx.jpg", alt: "HYPERX" },
  { id: 7, nombre: "INTEL", imagen: "./img/marcas/intel.jpg", alt: "INTEL" },
  { id: 8, nombre: "KINGSTON", imagen: "./img/marcas/kingston.jpg", alt: "KINGSTON" },
  { id: 9, nombre: "LENOVO", imagen: "./img/marcas/lenovo.jpg", alt: "LENOVO" },
  { id: 10, nombre: "LOGITECH", imagen: "./img/marcas/logitech.jpg", alt: "LOGITECH" },
  { id: 11, nombre: "MSI", imagen: "./img/marcas/msi.jpg", alt: "MSI" },
  { id: 12, nombre: "RAZER", imagen: "./img/marcas/razer.jpg", alt: "RAZER" },
];

const Marcas = () => {
  return (
    <div className="login-cards">
      <h4 className="text-center mb-4">MARCAS</h4>
      <div className="container my-4">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {marcas.map(({ id, nombre, imagen, alt }) => (
            <Col key={id}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={imagen}
                  alt={alt}
                  className="mx-auto mt-4"
                  style={{ maxHeight: 60, width: "auto", maxWidth: 100 }}
                />
                <Card.Body>
                  <Card.Title className="mb-3 fw-bold">{nombre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Marcas;