import React, { useState } from "react";

const LoginCard = ({ onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Aquí va la lógica de login real
  };

  return (
    <div className="login-card container my-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-4">INICIAR SESIÓN CON SU CUENTA</h4>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Dirección de Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-warning fw-bold">
            INICIAR SESIÓN
          </button>
        </div>
      </form>
      <p className="text-center mt-3 small">
        ¿No tiene una cuenta?{" "}
        <button
          type="button"
          onClick={onRegisterClick}
          style={{
            border: "none",
            background: "none",
            color: "blue",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Cree una aquí
        </button>
      </p>
    </div>
  );
};

export default LoginCard;
