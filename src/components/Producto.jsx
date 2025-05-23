import React, { useState } from 'react';
import '../styles/producto.css';
import { useCarrito } from '../context/CarritoContext';
import { toast } from 'react-toastify';

const extraerPrecioNumero = (precioStr) => {
  if (typeof precioStr !== 'string') {
    precioStr = String(precioStr || '0');
  }
  let numeroStr = precioStr.replace('S/ ', '').replace(/\./g, '').replace(',', '.');
  return parseFloat(numeroStr);
};

const Producto = ({ id, nombre, precio, marca, referencia, stock, imagen }) => {
  const { agregarAlCarrito } = useCarrito();
  const [showModal, setShowModal] = useState(false);

  const handleAgregar = () => {
    if (stock <= 0) {
      toast.error('Lo sentimos, este producto no tiene stock disponible.');
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

    agregarAlCarrito(producto);
    toast.success('¡Se añadió correctamente su producto al carrito!');
    setShowModal(false);
  };

  return (
    <>
      <div className="col">
        <div className="card product-card h-100 shadow-sm rounded-4 border-0">
          <div className="image-container" style={{ position: 'relative' }}>
            <img src={imagen} className="card-img-top product-img" alt={nombre} />
            <div
              onClick={() => setShowModal(true)}
              style={{ cursor: 'pointer', position: 'absolute', top: '10px', right: '10px' }}
              className="quick-view-outside"
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

      {showModal && (
        <>
          <div
            className="modal-backdrop fade show"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }}
            onClick={() => setShowModal(false)}
          ></div>

          <div
            className="modal d-block fade show"
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
            style={{ zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content modal-modern shadow-lg rounded-4 border-0">
                <div className="modal-header border-0">
                  <h5 className="modal-title text-primary fw-bold">{nombre}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Cerrar"
                  ></button>
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
      )}
    </>
  );
};

export default Producto;
