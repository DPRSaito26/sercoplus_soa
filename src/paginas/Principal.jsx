import React from 'react';
import Carrusel from '../components/Carrusel';
import Producto from '../components/Producto';

const productos = [
  {
    id: 'modalLenovoSlim3',
    nombre: 'LAPTOP LENOVO IDEAPAD SLIM 3 15IAH8, Ci5-12450H, 16GB DDR5, SSD 512GB, 15.6" FHD',
    precio: 'S/ 1.702,82 ($ 455,30)',
    marca: 'Lenovo',
    referencia: '109500128',
    stock: 0,
    imagen: './img/Laptops/laptop 1.jpg'
  },
  {
    id: 'modalLenovoIde3Label',
    nombre: 'LAPTOP LENOVO IDEAPAD 3 15IAU7, INTEL Ci3-1215U, 8GB DDR4, SSD 512GB, 15.6" FHD',
    precio: 'S/ 1.216,25 ($ 325,20)',
    marca: 'Lenovo',
    referencia: '109500129',
    stock: 5,
    imagen: './img/Laptops/laptop 2.jpg'
  }
];

const Principal = () => {
  return (
    <div className="container my-5">
      <Carrusel />
      <div className="product-section mt-5">
        <h2 className="mb-4">LAPTOS</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
          {productos.map(producto => (
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principal;
