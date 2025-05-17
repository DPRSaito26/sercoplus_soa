CREATE DATABASE sercoplusbd

CREATE USER serco_user WITH PASSWORD 'sercopass';
GRANT ALL PRIVILEGES ON DATABASE sercoplusbd TO serco_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE usuario TO serco_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO serco_user;

GRANT USAGE, SELECT, UPDATE ON ALL SEQUENCES IN SCHEMA public TO serco_user;

CREATE TABLE Cliente (
    IdCliente SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,
    CorreoElectronico VARCHAR(150) UNIQUE NOT NULL,
    Contrasena TEXT NOT NULL,
    FechaNacimiento DATE,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Producto (
    IdProducto SERIAL PRIMARY KEY,
    CodigoProducto VARCHAR(50) NOT NULL UNIQUE,
	NombreProducto VARCHAR(255) NOT NULL,
    DescProducto TEXT,
    Precio NUMERIC(10, 2) NOT NULL,
    Stock INT DEFAULT 0,
    RutaImg TEXT,
    CategoriaId INT,
	ProveedorId INT,
    Estado BOOLEAN DEFAULT TRUE,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FechaActualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CategoriaId) REFERENCES Categoria(IdCategoria),
	FOREIGN KEY (ProveedorId) REFERENCES Proveedor(IdProveedor)
);



CREATE TABLE Categoria (
    IdCategoria SERIAL PRIMARY KEY,
    NombreCategoria VARCHAR(100) NOT NULL UNIQUE,
    Descripcion TEXT,
    Estado BOOLEAN DEFAULT TRUE,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Proveedor (
    IdProveedor SERIAL PRIMARY KEY,
    RazonSocial VARCHAR(150) NOT NULL,
    RUC VARCHAR(11) NOT NULL UNIQUE,
    Direccion TEXT,
    Telefono VARCHAR(20),
    CorreoElectronico VARCHAR(100),
    Estado BOOLEAN DEFAULT TRUE,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Rol (
    IdRol SERIAL PRIMARY KEY,
    NombreRol VARCHAR(50) NOT NULL UNIQUE,
    Descripcion TEXT
);

CREATE TABLE Usuario (
    IdUsuario SERIAL PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100),
    CorreoElectronico VARCHAR(150) UNIQUE NOT NULL,
    Contrasena TEXT NOT NULL,
    RolId INT NOT NULL,
    Estado BOOLEAN DEFAULT TRUE,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RolId) REFERENCES Rol(IdRol)
);

