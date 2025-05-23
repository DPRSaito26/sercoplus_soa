import React, { createContext, useState, useEffect } from "react";

// Crear contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Estado inicial: intentar leer token y usuario de localStorage
  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return {
      token: token || null,
      user: user ? JSON.parse(user) : null,
    };
  });

  // Función para login: guarda token y usuario en estado y localStorage
  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthData({ token, user });
  };

  // Función para logout: limpia todo
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthData({ token: null, user: null });
  };

  // Puedes agregar efecto para refrescar token o validar sesión si quieres

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
