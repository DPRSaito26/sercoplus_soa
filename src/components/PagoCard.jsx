import React, { useState } from 'react';
import '../styles/PagoCard.css';
import { useCarrito } from '../context/CarritoContext';

const PagoCard = () => {
  const { carrito } = useCarrito();

  const [form, setForm] = useState({
    nombre: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    telefono: '',
    correo: '',
    banco: '',
    aceptoTerminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.aceptoTerminos) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }
    alert('Procesando pago...');
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + Number(prod.precio) * prod.cantidad, 0).toFixed(2);
  };

  return (
    <div className="pago-container">
      <h2 className="titulo">Método de Pago</h2>

      <div className="pago-contenido">
        {/* Información de pago */}
        <div className="pago-info">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            className="logo-paypal"
          />
          <h3>Información de pago</h3>
          <div className="tarjeta">
            {/* Resumen dentro de la tarjeta */}
            <div className="resumen-productos">
              <ul>
                {carrito.map((producto) => (
                  <li key={producto.id}>
                    {producto.nombre} × {producto.cantidad} — S/ {(Number(producto.precio) * producto.cantidad).toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="total">
                <strong>Total a pagar: S/ {calcularTotal()}</strong>
              </p>
            </div>

            {/* Términos */}
            <label className="terminos">
              <input
                type="checkbox"
                name="aceptoTerminos"
                checked={form.aceptoTerminos}
                onChange={handleChange}
              />
              Acepto haber leído los{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => alert('Mostrar términos y condiciones')}
              >
                términos y condiciones
              </button>{' '}
              y la{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => alert('Mostrar política de privacidad')}
              >
                política de privacidad
              </button>.
            </label>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="pago-formulario">
          <h3>Completa la información</h3>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del titular"
            value={form.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tipoIdentificacion"
            placeholder="Tipo de identificación"
            value={form.tipoIdentificacion}
            onChange={handleChange}
          />
          <input
            type="text"
            name="numeroIdentificacion"
            placeholder="Número de identificación"
            value={form.numeroIdentificacion}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Número de teléfono"
            value={form.telefono}
            onChange={handleChange}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
          />
          <select name="banco" value={form.banco} onChange={handleChange}>
            <option value="">Selecciona tu banco</option>
            <option value="bcp">BCP</option>
            <option value="interbank">Interbank</option>
            <option value="bbva">BBVA</option>
            <option value="scotiabank">Scotiabank</option>
          </select>

          <button type="submit" className="btn-pago">
            Ir a la plataforma de pago
          </button>
        </form>
      </div>
    </div>
  );
};

export default PagoCard;
