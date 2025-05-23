import React, { useState } from "react";
import styled from "styled-components";
import { cardStyles } from "../components/ReusableStyle"; // ✅ Import corregido

export default function Proveedores() {
  const [proveedores, setProveedores] = useState([
    {
      IdProveedor: 1,
      RazonSocial: "Proveedor Ejemplo",
      RUC: "12345678901",
      Direccion: "Calle Falsa 123",
      Telefono: "987654321",
      CorreoElectronico: "proveedor@email.com",
      Estado: "Activo",
    },
  ]);

  const [nuevo, setNuevo] = useState({
    IdProveedor: "",
    RazonSocial: "",
    RUC: "",
    Direccion: "",
    Telefono: "",
    CorreoElectronico: "",
    Estado: "",
  });

  const [editando, setEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando !== null) {
      setProveedores(
        proveedores.map((p, i) =>
          i === editando ? { ...nuevo, IdProveedor: p.IdProveedor } : p
        )
      );
      setEditando(null);
    } else {
      setProveedores([
        ...proveedores,
        {
          ...nuevo,
          IdProveedor: proveedores.length
            ? proveedores[proveedores.length - 1].IdProveedor + 1
            : 1,
        },
      ]);
    }

    setNuevo({
      IdProveedor: "",
      RazonSocial: "",
      RUC: "",
      Direccion: "",
      Telefono: "",
      CorreoElectronico: "",
      Estado: "",
    });
  };

  const handleEditar = (index) => {
    setEditando(index);
    setNuevo(proveedores[index]);
  };

  const handleEliminar = (index) => {
    setProveedores(proveedores.filter((_, i) => i !== index));
    if (editando === index) setEditando(null);
  };

  return (
    <Section>
      <div className="title">
        <h2>Proveedores</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-usuarios">
        <input type="text" placeholder="Razón Social" value={nuevo.RazonSocial}
          onChange={(e) => setNuevo({ ...nuevo, RazonSocial: e.target.value })} required />
        <input type="text" placeholder="RUC" value={nuevo.RUC}
          onChange={(e) => setNuevo({ ...nuevo, RUC: e.target.value })} required />
        <input type="text" placeholder="Dirección" value={nuevo.Direccion}
          onChange={(e) => setNuevo({ ...nuevo, Direccion: e.target.value })} required />
        <input type="text" placeholder="Teléfono" value={nuevo.Telefono}
          onChange={(e) => setNuevo({ ...nuevo, Telefono: e.target.value })} required />
        <input type="email" placeholder="Correo Electrónico" value={nuevo.CorreoElectronico}
          onChange={(e) => setNuevo({ ...nuevo, CorreoElectronico: e.target.value })} required />
        <select value={nuevo.Estado}
          onChange={(e) => setNuevo({ ...nuevo, Estado: e.target.value })} required>
          <option value="">Estado</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
        {editando !== null && (
          <button
            type="button"
            onClick={() => {
              setEditando(null);
              setNuevo({
                IdProveedor: "",
                RazonSocial: "",
                RUC: "",
                Direccion: "",
                Telefono: "",
                CorreoElectronico: "",
                Estado: "",
              });
            }}
            style={{ background: "#ccc", color: "#000" }}
          >
            Cancelar
          </button>
        )}
      </form>

      <div className="tabla-usuarios">
        <table>
          <thead>
            <tr>
              <th>IdProveedor</th>
              <th>Razón Social</th>
              <th>RUC</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Correo Electrónico</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedores.map((p, i) => (
              <tr key={p.IdProveedor}>
                <td>{p.IdProveedor}</td>
                <td>{p.RazonSocial}</td>
                <td>{p.RUC}</td>
                <td>{p.Direccion}</td>
                <td>{p.Telefono}</td>
                <td>{p.CorreoElectronico}</td>
                <td>{p.Estado}</td>
                <td>
                  <button onClick={() => handleEditar(i)}>Editar</button>
                  <button onClick={() => handleEliminar(i)} style={{ background: "#d32f2f", color: "#fff" }}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles}
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .title {
    h2 {
      color: #fe9808;
      letter-spacing: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  .form-usuarios {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    input, select {
      padding: 0.4rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      background: #fe9808;
      color: #fff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background: #d17a06;
      }
    }
  }

  .tabla-usuarios {
    width: 100%;
    overflow-x: auto;
    margin-top: 2rem;
    table {
      width: 100%;
      border-collapse: collapse;
      th {
        background: #fe9808;
        color: #fff;
      }
      td {
        background: #fff;
        color: #222;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 0.5rem;
        text-align: center;
      }
      tr:nth-child(even) td {
        background: #f9f9f9;
      }
    }
    button {
      margin: 0 0.2rem;
      padding: 0.3rem 0.7rem;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background: #1976d2;
      color: #fff;
      &:hover {
        background: #125ea2;
      }
    }
  }
`;
