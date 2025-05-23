import React, { useRef } from 'react';
import Carrusel from '../components/Carrusel';
import Producto from '../components/Producto';
import '../styles/principal.css';
import '../styles/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Asegúrate de tener esta librería instalada
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos


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
  },
  {
    id: 'modalLenovoLOQ',
    imagen: '/img/Laptops/laptop 4.jpg',
    nombre: 'LAPTOP LENOVO LOQ 15IAX9',
    precio: 'S/ 2.991,63 ($ 799,90)',
    marca: 'Lenovo',
    referencia: '101510054',
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
    precio: 'S/ 1.100,00',
    marca: 'Marca F',
    referencia: 'OF002',
    stock: 7,
  },
  {
    id: 'modalOferta3',
    imagen: '/img/Ofertas Especiales/of3.jpg',
    nombre: 'Producto en Oferta 1',
    precio: 'S/ 700,00',
    marca: 'Marca E',
    referencia: 'OF001',
    stock: 5,
  },
  {
    id: 'modalOferta4',
    imagen: '/img/Ofertas Especiales/of4.jpg',
    nombre: 'Producto en Oferta 2',
    precio: 'S/ 1.100,00',
    marca: 'Marca F',
    referencia: 'OF002',
    stock: 7,
  },
];


const Principal = () => {
  
  // Crea una referencia para cada scroll horizontal
  const laptopsScrollRef = useRef(null);
  const graficasScrollRef = useRef(null);
  const masVendidosScrollRef = useRef(null);
  const nuevosScrollRef = useRef(null);
  const ofertasScrollRef = useRef(null);

  // Función genérica para desplazar el scroll
  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' }); // Ajusta la distancia del scroll
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' }); // Ajusta la distancia del scroll
  };

  return (
    <div className="container my-5">
      <Carrusel />

       {/* Sección Laptops */}
      <div className="product-section-with-nav mt-5">
        <h2 className="mb-4">LAPTOP S</h2>
        <button className="scroll-button left" onClick={() => scrollLeft(laptopsScrollRef)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="horizontal-scroll" ref={laptopsScrollRef}>
          {productosLaptops.map(producto => ( // Renderiza todos los productos
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(laptopsScrollRef)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Sección Tarjetas gráficas */}
      <div className="product-section-with-nav mt-5">
        <h2 className="mb-4">TARJETAS GRÁFICAS</h2>
        <button className="scroll-button left" onClick={() => scrollLeft(graficasScrollRef)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="horizontal-scroll" ref={graficasScrollRef}>
          {productosTarjetasGraficas.map(producto => ( // Muestra solo los primeros 5
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(graficasScrollRef)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Sección Más Vendidos */}
      <div className="product-section-with-nav mt-5">
        <h2 className="mb-4">MÁS VENDIDOS</h2>
        <button className="scroll-button left" onClick={() => scrollLeft(masVendidosScrollRef)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="horizontal-scroll" ref={masVendidosScrollRef}>
          {productosMasVendidos.map(producto => ( // Muestra solo los primeros 5
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(masVendidosScrollRef)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Sección Productos Nuevos */}
      <div className="product-section-with-nav mt-5">
        <h2 className="mb-4">PRODUCTOS NUEVOS</h2>
        <button className="scroll-button left" onClick={() => scrollLeft(nuevosScrollRef)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="horizontal-scroll" ref={nuevosScrollRef}>
          {productosNuevos.map(producto => ( // Muestra solo los primeros 5
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(nuevosScrollRef)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Sección Ofertas */}
      <div className="product-section-with-nav mt-5">
        <h2 className="mb-4">OFERTAS</h2>
        <button className="scroll-button left" onClick={() => scrollLeft(ofertasScrollRef)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="horizontal-scroll" ref={ofertasScrollRef}>
          {productosOfertas.map(producto => ( // Muestra solo los primeros 5
            <Producto key={producto.id} {...producto} />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(ofertasScrollRef)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Principal;
