import React, { useState } from "react";
import styled from "styled-components";
import ReusableStyle from '../components/ReusableStyle';


export default function Categorias() {
  const [categorias, setCategorias] = useState([
    {
      IdCategoria: 1,
      NombreCategoria: "Electrónica",
      Descripcion: "Productos electrónicos",
      Estado: "Activo",
    },
  ]);
  const [nuevo, setNuevo] = useState({
    IdCategoria: "",
    NombreCategoria: "",
    Descripcion: "",
    Estado: "",
  });
  const [editando, setEditando] = useState(null);

  // Agregar o guardar categoría
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando !== null) {
      setCategorias(
        categorias.map((c, i) =>
          i === editando ? { ...nuevo, IdCategoria: c.IdCategoria } : c
        )
      );
      setEditando(null);
    } else {
      setCategorias([
        ...categorias,
        {
          ...nuevo,
          IdCategoria: categorias.length ? categorias[categorias.length - 1].IdCategoria + 1 : 1,
        },
      ]);
    }
    setNuevo({
      IdCategoria: "",
      NombreCategoria: "",
      Descripcion: "",
      Estado: "",
    });
  };

  // Editar categoría
  const handleEditar = (index) => {
    setEditando(index);
    setNuevo(categorias[index]);
  };

  // Eliminar categoría
  const handleEliminar = (index) => {
    setCategorias(categorias.filter((_, i) => i !== index));
    if (editando === index) setEditando(null);
  };

  return (
    <Section>
      <div className="title">
        <h2>Categorías</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-usuarios">
        <input
          type="text"
          placeholder="Nombre de la Categoría"
          value={nuevo.NombreCategoria}
          onChange={(e) => setNuevo({ ...nuevo, NombreCategoria: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={nuevo.Descripcion}
          onChange={(e) => setNuevo({ ...nuevo, Descripcion: e.target.value })}
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
        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
        {editando !== null && (
          <button
            type="button"
            onClick={() => {
              setEditando(null);
              setNuevo({
                IdCategoria: "",
                NombreCategoria: "",
                Descripcion: "",
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
              <th>IdCategoria</th>
              <th>NombreCategoria</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((c, i) => (
              <tr key={c.IdCategoria}>
                <td>{c.IdCategoria}</td>
                <td>{c.NombreCategoria}</td>
                <td>{c.Descripcion}</td>
                <td>{c.Estado}</td>
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