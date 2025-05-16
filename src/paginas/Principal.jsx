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

const productosTarjetasGraficas = [
  {
    id: 'modalNvidiaRTX3080',
    imagen: '/img/graficas/grafica1.jpg',
    nombre: 'NVIDIA GeForce RTX 3080',
    precio: 'S/ 4.200,00 ($ 1,100.00)',
    marca: 'NVIDIA',
    referencia: 'NVRTX3080',
    stock: 7
  },
  {
    id: 'modalNvidiaRTX3070',
    imagen: '/img/graficas/grafica2.jpg',
    nombre: 'NVIDIA GeForce RTX 3070',
    precio: 'S/ 3.200,00 ($ 840.00)',
    marca: 'NVIDIA',
    referencia: 'NVRTX3070',
    stock: 12
  },
  
];

const productosMasVendidos = [
  {
    id: 'modalProducto1',
    imagen: '/img/MasVendidos/Mas1.jpg',
    nombre: 'Producto Más Vendido 1',
    precio: 'S/ 1,200.00',
    marca: 'Marca A',
    referencia: 'MV001',
    stock: 15,
  },
  {
    id: 'modalProducto2',
    imagen: '/img/MasVendidos/Mas2.jpg',
    nombre: 'Producto Más Vendido 2',
    precio: 'S/ 2,300.00',
    marca: 'Marca B',
    referencia: 'MV002',
    stock: 8,
  },
  
   {
    id: 'modalProducto3',
    imagen: '/img/MasVendidos/Mas3.jpg',
    nombre: 'Producto Más Vendido 3',
    precio: 'S/ 1,200.00',
    marca: 'Marca A',
    referencia: 'MV001',
    stock: 15,
  },
  {
    id: 'modalProducto4',
    imagen: '/img/MasVendidos/Mas 4.jpg',
    nombre: 'Producto Más Vendido 4',
    precio: 'S/ 2,300.00',
    marca: 'Marca B',
    referencia: 'MV002',
    stock: 8,
  },
];

const productosNuevos = [
  {
    id: 'modalProductoNuevo1',
    imagen: '/img/Nuevos Productos/Nuevo 1.jpg',
    nombre: 'Producto Nuevo 1',
    precio: 'S/ 980.00',
    marca: 'Marca C',
    referencia: 'PN001',
    stock: 20,
  },
  {
    id: 'modalProductoNuevo2',
    imagen: '/img/Nuevos Productos/Nuevo 2.jpg',
    nombre: 'Producto Nuevo 2',
    precio: 'S/ 1,400.00',
    marca: 'Marca D',
    referencia: 'PN002',
    stock: 10,
  },

  {
    id: 'modalProductoNuevo3',
    imagen: '/img/Nuevos Productos/Nuevo 3.jpg',
    nombre: 'Producto Nuevo 3',
    precio: 'S/ 980.00',
    marca: 'Marca C',
    referencia: 'PN001',
    stock: 20,
  },
  {
    id: 'modalProductoNuevo4',
    imagen: '/img/Nuevos Productos/Nuevo 4.jpg',
    nombre: 'Producto Nuevo 4',
    precio: 'S/ 1,400.00',
    marca: 'Marca D',
    referencia: 'PN002',
    stock: 10,
  },
  
];

const productosOfertas = [
  {
    id: 'modalOferta1',
    imagen: '/img/Ofertas Especiales/of1.jpg',
    nombre: 'Producto en Oferta 1',
    precio: 'S/ 700.00',
    marca: 'Marca E',
    referencia: 'OF001',
    stock: 5,
  },
  {
    id: 'modalOferta2',
    imagen: '/img/Ofertas Especiales/of2.jpg',
    nombre: 'Producto en Oferta 2',
    precio: 'S/ 1,100.00',
    marca: 'Marca F',
    referencia: 'OF002',
    stock: 7,
  },
  {
    id: 'modalOferta3',
    imagen: '/img/Ofertas Especiales/of3.jpg',
    nombre: 'Producto en Oferta 1',
    precio: 'S/ 700.00',
    marca: 'Marca E',
    referencia: 'OF001',
    stock: 5,
  },
  {
    id: 'modalOferta4',
    imagen: '/img/Ofertas Especiales/of4.jpg',
    nombre: 'Producto en Oferta 2',
    precio: 'S/ 1,100.00',
    marca: 'Marca F',
    referencia: 'OF002',
    stock: 7,
  },
];


const Principal = () => {
  return (
    <div className="container my-5">
      <Carrusel />
      {/* Sección Laptops */}
      <div className="product-section mt-5">
        <h2 className="mb-4">LAPTOS</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
          {productosLaptops.map(producto => (
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
      </div>
      {/* Sección Tarjetas gráficas */}
      <div className="product-section mt-5">
  <h2 className="mb-4">TARJETAS GRÁFICAS</h2>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
    {productosTarjetasGraficas.map(producto => (
      <Producto key={producto.id} {...producto} />
    ))}
  </div>
</div>

{/* Sección Más Vendidos */}
<div className="product-section mt-5">
  <h2 className="mb-4">MÁS VENDIDOS</h2>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
    {productosMasVendidos.map(producto => (
      <Producto key={producto.id} {...producto} />
    ))}
  </div>
</div>

{/* Sección Productos Nuevos */}
<div className="product-section mt-5">
  <h2 className="mb-4">PRODUCTOS NUEVOS</h2>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
    {productosNuevos.map(producto => (
      <Producto key={producto.id} {...producto} />
    ))}
  </div>
</div>

{/* Sección Ofertas */}
<div className="product-section mt-5">
  <h2 className="mb-4">OFERTAS</h2>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 section-animate">
    {productosOfertas.map(producto => (
      <Producto key={producto.id} {...producto} />
    ))}
  </div>
</div>


    </div>   
  );
};

export default Principal;
