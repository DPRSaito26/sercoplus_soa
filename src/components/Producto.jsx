import React from 'react';
import '../styles/producto.css';
import { useCarrito } from '../context/CarritoContext';

const extraerPrecioNumero = (precioStr) => {
  if (typeof precioStr !== 'string') {
    precioStr = String(precioStr || '0');
  }
  let numeroStr = precioStr.replace('S/ ', '').replace(/\./g, '').replace(',', '.');
  return parseFloat(numeroStr);
};

const Producto = ({ id, nombre, precio, marca, referencia, stock, imagen }) => {
  const { agregarAlCarrito } = useCarrito();

  const handleAgregar = () => {
    if (stock <= 0) {
      alert('Lo sentimos, este producto no tiene stock disponible.');
      return;
    }

    const precioNumerico = typeof precio === 'string' ? extraerPrecioNumero(precio) : precio;

    const producto = {
      id,
      nombre,
      precio: precioNumerico,
      marca,
      referencia,
      stock,
      imagen,
    };

    console.log('Agregando al carrito:', producto);
    agregarAlCarrito(producto);
  };

  return (
    <>
      <div className="col">
        <div className="card product-card h-100 shadow-sm rounded-4 border-0">
          <div className="image-container" style={{ position: 'relative' }}>
            <img src={imagen} className="card-img-top product-img" alt={nombre} />
            <div
              className="quick-view-outside"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${id}`}
              style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }}
            >
              <i className="bi bi-search"></i> <span>Vista rápida</span>
            </div>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{nombre}</h5>
            <p className="card-text text-warning fw-semibold fs-5">{precio}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={`modal-${id}`}
        tabIndex="-1"
        aria-labelledby={`modal-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content modal-modern shadow-lg rounded-4 border-0">
            <div className="modal-header border-0">
              <h5 className="modal-title text-primary fw-bold">{nombre}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5">
                  <img src={imagen} className="img-fluid rounded-4" alt={nombre} />
                </div>
                <div className="col-md-7">
                  <p><strong>Precio:</strong> <span className="text-warning fw-semibold fs-5">{precio}</span></p>
                  <p><strong>Marca:</strong> {marca}</p>
                  <p><strong>Referencia:</strong> {referencia}</p>
                  <p><strong>Stock:</strong> {stock}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-warning btn-lg fw-bold me-2"
                onClick={handleAgregar}
              >
                <i className="bi bi-cart-plus-fill me-2"></i> Añadir al carrito
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
