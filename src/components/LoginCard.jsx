import React, { useState } from "react";

const LoginCard = ({ onRegisterClick, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correoElectronico: email,
          contrasena: password,
        }),
      });

      if (!response.ok) {
        const errorMsg = await response.text();
        alert("Error en el login: " + errorMsg);
        return;
      }

      const data = await response.json();

      // Guarda token y tipo para usar después
      localStorage.setItem("token", data.token);
      localStorage.setItem("tipoUsuario", data.tipo);

      alert(`Login exitoso como ${data.tipo}`);

      // Redirige según tipo de usuario
      onLoginSuccess(data.tipo);

    } catch (error) {
      alert("Error de conexión con el servidor.");
      console.error(error);
    }
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
            autoComplete="username"
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
            autoComplete="current-password"
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
