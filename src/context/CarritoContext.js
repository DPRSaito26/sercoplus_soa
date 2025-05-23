import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CarritoContext = createContext();

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  // Cargar carrito desde localStorage o iniciar vacío
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Guardar en localStorage cuando cambia carrito
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Agregar producto al carrito o aumentar cantidad si ya existe
  const agregarAlCarrito = (productoNuevo) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === productoNuevo.id);

      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === productoNuevo.id  // <-- Aquí cambié '==' por '==='
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...productoNuevo, cantidad: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  // Actualizar cantidad específica del producto
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;

    console.log('Actualizando cantidad de ID:', id, 'a:', nuevaCantidad);

    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      );
      return [...nuevoCarrito]; // crear nuevo array para asegurar re-render
    });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCarrito = () => useContext(CarritoContext);