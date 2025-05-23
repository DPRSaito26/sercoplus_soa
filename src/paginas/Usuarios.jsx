import React, { useState } from "react";
import styled from "styled-components";
import ReusableStyle from '../components/ReusableStyle';



export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    {
      IdUsuario: 1,
      Nombre: "Juan",
      Apellido: "Pérez",
      Correo: "juan@email.com",
      Contrasena: "123456",
      RolID: 2,
      Estado: "Activo",
      Fechacreacion: "2024-05-20",
    },
  ]);
  const [nuevo, setNuevo] = useState({
    IdUsuario: "",
    Nombre: "",
    Apellido: "",
    Correo: "",
    Contrasena: "",
    RolID: "",
    Estado: "",
    Fechacreacion: "",
  });
  const [editando, setEditando] = useState(null);

  // Agregar o guardar usuario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando !== null) {
      setUsuarios(
        usuarios.map((u, i) =>
          i === editando ? { ...nuevo, IdUsuario: u.IdUsuario } : u
        )
      );
      setEditando(null);
    } else {
      setUsuarios([
        ...usuarios,
        {
          ...nuevo,
          IdUsuario: usuarios.length ? usuarios[usuarios.length - 1].IdUsuario + 1 : 1,
        },
      ]);
    }
    setNuevo({
      IdUsuario: "",
      Nombre: "",
      Apellido: "",
      Correo: "",
      Contrasena: "",
      RolID: "",
      Estado: "",
      Fechacreacion: "",
    });
  };

  // Editar usuario
  const handleEditar = (index) => {
    setEditando(index);
    setNuevo(usuarios[index]);
  };

  // Eliminar usuario
  const handleEliminar = (index) => {
    setUsuarios(usuarios.filter((_, i) => i !== index));
    if (editando === index) setEditando(null);
  };

  return (
    <Section>
      <div className="title">
        <h2>Usuarios</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-usuarios">
        <input
          type="text"
          placeholder="Nombre"
          value={nuevo.Nombre}
          onChange={(e) => setNuevo({ ...nuevo, Nombre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={nuevo.Apellido}
          onChange={(e) => setNuevo({ ...nuevo, Apellido: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={nuevo.Correo}
          onChange={(e) => setNuevo({ ...nuevo, Correo: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={nuevo.Contrasena}
          onChange={(e) => setNuevo({ ...nuevo, Contrasena: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="RolID"
          value={nuevo.RolID}
          onChange={(e) => setNuevo({ ...nuevo, RolID: e.target.value })}
          required
        />
        <select
          value={nuevo.Estado}
          onChange={(e) => setNuevo({ ...nuevo, Estado: e.target.value })}
          required
        >
          <option value="">Estado</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        <input
          type="date"
          placeholder="Fecha creación"
          value={nuevo.Fechacreacion}
          onChange={(e) => setNuevo({ ...nuevo, Fechacreacion: e.target.value })}
          required
        />
        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
        {editando !== null && (
          <button
            type="button"
            onClick={() => {
              setEditando(null);
              setNuevo({
                IdUsuario: "",
                Nombre: "",
                Apellido: "",
                Correo: "",
                Contrasena: "",
                RolID: "",
                Estado: "",
                Fechacreacion: "",
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
              <th>IdUsuario</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo electrónico</th>
              <th>Contraseña</th>
              <th>RolID</th>
              <th>Estado</th>
              <th>Fecha creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={u.IdUsuario}>
                <td>{u.IdUsuario}</td>
                <td>{u.Nombre}</td>
                <td>{u.Apellido}</td>
                <td>{u.Correo}</td>
                <td>{u.Contrasena}</td>
                <td>{u.RolID}</td>
                <td>{u.Estado}</td>
                <td>{u.Fechacreacion}</td>
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
        background: #fff;      // Fondo blanco para el contenido
        color: #222;           // Letra negra para el contenido
      }
      th, td {
        border: 1px solid #ddd;
        padding: 0.5rem;
        text-align: center;
      }
      tr:nth-child(even) td {
        background: #f9f9f9;  // Opcional: filas pares con gris claro
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

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;