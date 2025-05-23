import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';  // IMPORTAR useNavigate


const Carrito = ({ visible }) => {
  const { carrito, eliminarDelCarrito, actualizarCantidad } = useCarrito();
  const navigate = useNavigate();  // inicializar

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + Number(prod.precio) * prod.cantidad, 0).toFixed(2);
  };

  const aumentarCantidad = (id, cantidadActual, stock) => {
    if (cantidadActual < stock) {
      actualizarCantidad(id, cantidadActual + 1);
    }
  };

  const disminuirCantidad = (id, cantidadActual) => {
    if (cantidadActual > 1) {
      actualizarCantidad(id, cantidadActual - 1);
    }
  };

  if (typeof visible !== 'undefined' && !visible) return null;

  return (
    <div
      className="position-absolute end-0 mt-2 me-3 bg-white shadow border rounded"
      style={{ width: '350px', zIndex: 1050 }}
    >
      <div className="p-3 border-bottom fw-bold text-center">
        Tu Carrito ({carrito.length} {carrito.length === 1 ? 'artículo' : 'artículos'})
      </div>
      <div className="p-3" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          carrito.map((producto) => (
            <div key={producto.id} className="d-flex mb-3">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginRight: '10px'
                }}
              />
              <div className="flex-grow-1">
                <strong>{producto.nombre}</strong>
                <div className="small text-muted">S/ {Number(producto.precio).toFixed(2)} c/u</div>
                <div className="d-flex align-items-center mt-1">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => disminuirCantidad(producto.id, producto.cantidad)}>-</button>
                  <span className="mx-2">{producto.cantidad}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => aumentarCantidad(producto.id, producto.cantidad, producto.stock)}>+</button>
                </div>
                <div className="small">
                  Subtotal: <strong>S/ {(Number(producto.precio) * producto.cantidad).toFixed(2)}</strong>
                </div>
              </div>
              <button className="btn btn-danger btn-sm ms-2" onClick={() => eliminarDelCarrito(producto.id)}>✕</button>
            </div>
          ))
        )}
      </div>
      <div className="p-3 border-top">
        <p className="text-end fw-bold">Total: S/ {calcularTotal()}</p>
        <button
  className="btn btn-danger w-100 btn-sm"
  disabled={carrito.length === 0}
  onClick={() => navigate('/envio')}  // <- cambio aquí
>
  Proceder al pago
</button>
      </div>
    </div>
  );
};

export default Carrito;