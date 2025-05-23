import React, { useState } from "react";

const RegisterCard = ({ onLoginClick }) => {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correoElectronico: "",
    contrasena: "",
    confirmContrasena: "",
    estado: true,
    fechaNacimiento: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.contrasena !== form.confirmContrasena) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Validar que fechaNacimiento tenga formato YYYY-MM-DD o esté vacía
    if (form.fechaNacimiento && !/^\d{4}-\d{2}-\d{2}$/.test(form.fechaNacimiento)) {
      setError("Fecha de nacimiento debe tener formato YYYY-MM-DD");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: form.nombre,
          apellidos: form.apellidos,
          correoElectronico: form.correoElectronico,
          contrasena: form.contrasena,
          estado: form.estado,
          fechaNacimiento: form.fechaNacimiento || null,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText || "Error desconocido");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setSuccessMsg("Registro exitoso, ¡puede iniciar sesión ahora!");
      setForm({
        nombre: "",
        apellidos: "",
        correoElectronico: "",
        contrasena: "",
        confirmContrasena: "",
        estado: true,
        fechaNacimiento: "",
      });
    } catch (error) {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-card container my-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-4">CREAR UNA CUENTA</h4>

      {error && <div className="alert alert-danger">{error}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            placeholder="Ingrese sus apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">
            Dirección de Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="correoElectronico"
            name="correoElectronico"
            placeholder="Ingrese su correo"
            value={form.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            name="contrasena"
            placeholder="Ingrese su contraseña"
            value={form.contrasena}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmContrasena" className="form-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmContrasena"
            name="confirmContrasena"
            placeholder="Repita su contraseña"
            value={form.confirmContrasena}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de Nacimiento (YYYY-MM-DD)
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={form.fechaNacimiento}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-warning fw-bold"
            disabled={loading}
          >
            {loading ? "Creando..." : "CREAR CUENTA"}
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
