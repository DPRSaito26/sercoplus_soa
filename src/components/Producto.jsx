import React from 'react';
import '../styles/producto.css';

const Producto = ({ id, nombre, precio, marca, referencia, stock, imagen }) => (
  <>
    <div className="col">
      <div className="card product-card h-100 shadow-sm rounded-4 border-0">
        <div className="quick-view" data-bs-toggle="modal" data-bs-target={`#${id}`} style={{ cursor: 'pointer' }}>
          <i className="bi bi-search"></i> <span>Vista rápida</span>
        </div>
        <img src={imagen} className="card-img-top product-img" alt={nombre} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{nombre}</h5>
          <p className="card-text text-warning fw-semibold fs-5">{precio}</p>
        </div>
      </div>
    </div>

    {/* Modal */}
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id} aria-hidden="true">
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
            <button type="button" className="btn btn-warning btn-lg fw-bold me-2">
              <i className="bi bi-cart-plus-fill me-2"></i> Añadir al carrito
            </button>
            <button type="button" className="btn btn-outline-danger btn-lg">
              <i className="bi bi-heart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Producto;
