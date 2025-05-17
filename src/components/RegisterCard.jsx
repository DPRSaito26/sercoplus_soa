import React, { useState } from "react";

const RegisterCard = ({ onLoginClick }) => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Formulario enviado:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="login-card container my-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-4">CREAR UNA CUENTA</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Dirección de Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repita su contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-warning fw-bold">
            CREAR CUENTA
          </button>
        </div>
      </form>
      <p className="text-center mt-3 small">
        ¿Ya tiene una cuenta?{" "}
        <button
          type="button"
          onClick={onLoginClick}
          style={{
            border: "none",
            background: "none",
            color: "blue",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Inicie sesión aquí
        </button>
      </p>
    </div>
  );
};

export default RegisterCard;
