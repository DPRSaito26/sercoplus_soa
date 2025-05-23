import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../styles/EnvioCard.css';

const EnvioCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    // Aquí podrías validar los datos o guardar el estado si quieres
    navigate('/pago'); // Navega a la ruta donde esté PagoCard
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold">Información de Envío</h2>
          <p className="text-muted">
            Por favor, completa los siguientes datos para procesar tu pedido.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card envio-card shadow-lg p-4">
            <h4 className="mb-4 text-center">Formulario de Envío</h4>
            <form onSubmit={handleSubmit}>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">Nombre:</label>
    <div className="col-9">
      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">Apellido:</label>
    <div className="col-9">
      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">Dirección:</label>
    <div className="col-9">
      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">Ciudad:</label>
    <div className="col-9">
      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">Teléfono:</label>
    <div className="col-9">
      <input type="tel" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <label className="col-form-label col-3 text-start">DNI:</label>
    <div className="col-9">
      <input type="text" className="form-control" />
    </div>
  </div>

  <button type="submit" className="btn btn-confirmar w-100">
    Confirmar Envío
  </button>
</form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvioCard;