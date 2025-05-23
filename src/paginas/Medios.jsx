import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Medios = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Contenedor principal con publicidad a la izquierda y contenido a la derecha */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Publicidad Izquierda tipo banner */}
        <div
          style={{
            width: "350px",
            marginRight: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "24px",
          }}
        >
          {/* Primera publicidad */}
          <a
            href="https://sercoplus.com/busqueda?controller=search&s=rtx+40"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              width: "100%",
              height: "100%",
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="./img/publicidad/publicidad1.png"
              alt="Publicidad ejemplo 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>

          {/* Segunda publicidad */}
          <a
            href="https://sercoplus.com/monitores-21-24/642217-monitor-advance-adv-2453s-23-8-ips-fh.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              width: "100%",
              height: "100%",
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="./img/publicidad/publicidad2.png"
              alt="Publicidad ejemplo 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>
          {/* tercera publicidad */}
          <a
            href="https://sercoplus.com/monitores-21-24/642217-monitor-advance-adv-2453s-23-8-ips-fh.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              width: "100%",
              height: "100%",
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="./img/publicidad/publicidad3.png"
              alt="Publicidad ejemplo 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>
        </div>

        {/* Contenido original del componente Medios */}
        <div className="login-card" style={{ maxWidth: "800px", width: "100%" }}>
          <div style={{ fontSize: "0.95rem" }}>
            <div className="d-flex justify-content-center">
              <img
                src="./img/medios/Mediospago.png"
                alt="Logo Visa"
                className="img-fluid"
                style={{ maxWidth: "800px", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medios;
