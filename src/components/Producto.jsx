import React from 'react';

const Producto = ({ id, nombre, precio, marca, referencia, stock, imagen }) => (
  <>
    <div className="col">
      <div className="card position-relative overflow-hidden">
        <div className="quick-view" data-bs-toggle="modal" data-bs-target={`#${id}`} style={{ cursor: 'pointer' }}>
          <i className="bi bi-search"></i> <span>Vista rápida</span>
        </div>
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text"><font color="#fe9808">{precio}</font></p>
        </div>
      </div>
    </div>

    {/* Modal */}
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{nombre}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <img src={imagen} className="img-fluid" alt={nombre} />
              </div>
              <div className="col-md-7">
                <p><strong>Precio:</strong> {precio}</p>
                <p><strong>Marca:</strong> {marca}</p>
                <p><strong>Referencia:</strong> {referencia}</p>
                <p><strong>Stock:</strong> {stock}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-warning"><i className="bi bi-cart"></i> AÑADIR AL CARRITO</button>
            <button type="button" className="btn btn-outline-danger"><i className="bi bi-heart-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Producto;
