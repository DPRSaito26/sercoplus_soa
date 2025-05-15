import React from 'react';
import Carrusel from '../components/Carrusel';
import Producto from '../components/Producto';
import '../styles/principal.css';

const productosLaptops = [
  {
    id: 'modalLenovoSlim3',
    imagen: '/img/Laptops/laptop 1.jpg',
    nombre: 'LAPTOP LENOVO IDEAPAD SLIM 3',
    precio: 'S/ 1.702,82 ($ 455,30)',
    marca: 'Lenovo',
    referencia: '109500128',
    stock: 0
  },
  {
    id: 'modalLenovoIde3Label',
    imagen: '/img/Laptops/laptop 2.jpg',
    nombre: 'LAPTOP LENOVO IDEAPAD 3',
    precio: 'S/ 1.216,25 ($ 325,20)',
    marca: 'Lenovo',
    referencia: '109500129',
    stock: 5
  },
  {
    id: 'modalLenovoV15Label',
    imagen: '/img/Laptops/laptop 3.jpg',
    nombre: 'LAPTOP LENOVO V15 G4',
    precio: 'S/ 1.646,72 ($ 440,30)',
    marca: 'Lenovo',
    referencia: '101150084',
    stock: 10
  },
  {
    id: 'modalLenovoLOQ',
    imagen: '/img/Laptops/laptop 4.jpg',
    nombre: 'LAPTOP LENOVO LOQ 15IAX9',
    precio: 'S/ 2.991,63 ($ 799,90)',
    marca: 'Lenovo',
    referencia: '101510054',
    stock: 10
  }
];

const Principal = () => {
  return (
    <div className="container my-5">
      <Carrusel />
      <div className="product-section mt-5">
        <h2 className="mb-4">LAPTOS</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
          {productosLaptops.map(producto => (
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principal;
