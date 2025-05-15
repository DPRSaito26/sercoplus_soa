import React from 'react';

const imagenes = Array.from({ length: 17 }, (_, i) => `./img/banner/banner ${i + 1}.${[2, 4, 5, 12, 14, 15].includes(i + 1) ? 'jpg' : 'png'}`);

const Carrusel = () => (
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {imagenes.map((src, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img src={src} className="d-block w-100" alt={`Producto destacado ${index + 1}`} />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carrusel;