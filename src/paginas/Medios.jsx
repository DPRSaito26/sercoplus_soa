import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Medios = () => {
  return (
    <div className="login-card">
      <h4 className="text-center mb-4">MEDIOS DE PAGO</h4>
      <div className="terms-content" style={{ textAlign: "justify", fontSize: "0.95rem" }}>
      <div
        className="terms-content"
        style={{ textAlign: 'justify', fontSize: '0.95rem' }}
      >
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src="/visa.png"
              alt="Logo Visa"
              className="img-fluid"
              width={200}
              height={150}
            />
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/PayPal_Logo2014.png"
              alt="Logo PayPal"
              className="img-fluid"
              width={200}
              height={150}
            />
          </div>
        </div>
      </div> 
      </div>
    </div>
  );
};

export default Medios;
