import React, { useState } from "react";
import styled from "styled-components";
import { cardStyles } from "../components/ReusableStyle"; // ✅ Ruta corregida

export default function Productos() {
  const [productos, setProductos] = useState([
    {
      IdProducto: 1,
      CodigoProducto: "P001",
      NombreProducto: "Producto 1",
      DescProducto: "Descripción del producto 1",
      Precio: 100,
      Stock: 50,
      rutaImg: "https://via.placeholder.com/50",
      CategoriaId: 1,
      ProveedorId: 1,
      Estado: "Activo",
    },
  ]);

  const [nuevo, setNuevo] = useState({
    IdProducto: "",
    CodigoProducto: "",
    NombreProducto: "",
    DescProducto: "",
    Precio: "",
    Stock: "",
    rutaImg: "",
    CategoriaId: "",
    ProveedorId: "",
    Estado: "",
  });

  const [editando, setEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando !== null) {
      setProductos(
        productos.map((p, i) =>
          i === editando ? { ...nuevo, IdProducto: p.IdProducto } : p
        )
      );
      setEditando(null);
    } else {
      setProductos([
        ...productos,
        {
          ...nuevo,
          IdProducto: productos.length
            ? productos[productos.length - 1].IdProducto + 1
            : 1,
        },
      ]);
    }

    setNuevo({
      IdProducto: "",
      CodigoProducto: "",
      NombreProducto: "",
      DescProducto: "",
      Precio: "",
      Stock: "",
      rutaImg: "",
      CategoriaId: "",
      ProveedorId: "",
      Estado: "",
    });
  };

  const handleEditar = (index) => {
    setEditando(index);
    setNuevo(productos[index]);
  };

  const handleEliminar = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
    if (editando === index) setEditando(null);
  };

  return (
    <Section>
      <div className="title">
        <h2>Productos</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-usuarios">
        <input type="text" placeholder="Código" value={nuevo.CodigoProducto}
          onChange={(e) => setNuevo({ ...nuevo, CodigoProducto: e.target.value })} required />
        <input type="text" placeholder="Nombre" value={nuevo.NombreProducto}
          onChange={(e) => setNuevo({ ...nuevo, NombreProducto: e.target.value })} required />
        <input type="text" placeholder="Descripción" value={nuevo.DescProducto}
          onChange={(e) => setNuevo({ ...nuevo, DescProducto: e.target.value })} required />
        <input type="number" placeholder="Precio" value={nuevo.Precio}
          onChange={(e) => setNuevo({ ...nuevo, Precio: e.target.value })} required />
        <input type="number" placeholder="Stock" value={nuevo.Stock}
          onChange={(e) => setNuevo({ ...nuevo, Stock: e.target.value })} required />
        <input type="text" placeholder="URL Imagen" value={nuevo.rutaImg}
          onChange={(e) => setNuevo({ ...nuevo, rutaImg: e.target.value })} />
        <input type="number" placeholder="Categoría ID" value={nuevo.CategoriaId}
          onChange={(e) => setNuevo({ ...nuevo, CategoriaId: e.target.value })} required />
        <input type="number" placeholder="Proveedor ID" value={nuevo.ProveedorId}
          onChange={(e) => setNuevo({ ...nuevo, ProveedorId: e.target.value })} required />
        <select value={nuevo.Estado}
          onChange={(e) => setNuevo({ ...nuevo, Estado: e.target.value })} required >
          <option value="">Estado</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>

        <button type="submit">{editando !== null ? "Guardar" : "Agregar"}</button>
        {editando !== null && (
          <button type="button" onClick={() => {
            setEditando(null);
            setNuevo({
              IdProducto: "",
              CodigoProducto: "",
              NombreProducto: "",
              DescProducto: "",
              Precio: "",
              Stock: "",
              rutaImg: "",
              CategoriaId: "",
              ProveedorId: "",
              Estado: "",
            });
          }} style={{ background: "#ccc", color: "#000" }}>
            Cancelar
          </button>
        )}
      </form>

      <div className="tabla-usuarios">
        <table>
          <thead>
            <tr>
              <th>IdProducto</th>
              <th>Código</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagen</th>
              <th>Categoría ID</th>
              <th>Proveedor ID</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p, i) => (
              <tr key={p.IdProducto}>
                <td>{p.IdProducto}</td>
                <td>{p.CodigoProducto}</td>
                <td>{p.NombreProducto}</td>
                <td>{p.DescProducto}</td>
                <td>{p.Precio}</td>
                <td>{p.Stock}</td>
                <td>
                  {p.rutaImg ? (
                    <img src={p.rutaImg} alt={p.NombreProducto} width={40} height={40} style={{ objectFit: "cover" }} />
                  ) : (
                    "Sin imagen"
                  )}
                </td>
                <td>{p.CategoriaId}</td>
                <td>{p.ProveedorId}</td>
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
      img {
        border-radius: 5px;
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
