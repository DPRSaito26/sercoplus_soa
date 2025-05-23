import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TerminosYCondiciones = () => {
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
      {/* Contenedor para alinear ambos arriba */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Publicidad Izquierda tipo banner */}
        <div
          style={{
            width: "350px",
            marginRight: "100px", // espacio entre publicidad y card
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "24px", // espacio entre banners
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
              width: "292px",
              height: "486px",
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="/publicidad1.png"
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
              width: "292px",
              height: "483px", // puedes ajustar la altura de esta publicidad
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="/publicidad2.png"
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
              width: "292px",
              height: "325px",
              background: "#fff",
              border: "1px solid #e0e0e0",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)")}
          >
            <img
              src="/publicidad3.png"
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

        {/* Card Central */}
        <div
          className="login-card"
          style={{
            maxWidth: "700px",
            width: "100%",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            borderRadius: "12px",
            background: "#fff",
            padding: "30px 32px 24px 32px",
          }}
        >
          <h4 className="text-center mb-4 texto-rojo">TÉRMINOS Y CONDICIONES</h4>
          <div className="terms-content" style={{ textAlign: "justify", fontSize: "1.05rem" }}>
            <strong>PRODUCTOS SUJETOS A RESTRICCIONES</strong><br />
            Al respecto cabe precisar, que la empresa maneja sus políticas y restricciones de ventas de acuerdo a las limitaciones en las que se encuentra el mercado de cómputo; condicionándonos como empresa a realizar la venta de ciertos productos con restricciones los cuales están mencionados en la página web para conocimiento de las personas que realizan la visita a nuestra web y ya de manera detallada lo realizan nuestros asesores al momento de contactarlos para concretar la venta, cumplimos con informar de tales circunstancias de manera clara e inequívoca al consumidor.
            <hr />
            <strong>HORARIO DE GARANTÍAS</strong>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li><strong>Lunes a Viernes:</strong> 10:00 am - 4:00 pm</li>
              <li><strong>Refrigerio:</strong> 1:00 pm - 2:00 pm</li>
              <li><strong>Sábados:</strong> 10:00 am - 1:00 pm</li>
            </ul>
            <hr />
            <strong>EXPERIENCIA PERSONALIZADA</strong><br />
            En SERCOPLUS queremos siempre ofrecerle una experiencia de compra que sea relevante y personalizada. Para lograr esto ahora requerimos algunos datos adicionales al momento de registrarse para poder conocerte mejor y poder comunicarte sobre los productos que pueden ser de su interés.
            <hr />
            <strong>TÉRMINOS Y CONDICIONES GENERALES</strong><br />
            Este documento describe los términos y condiciones generales y las políticas de privacidad aplicables al acceso y uso de los servicios ofrecidos por Sercoplus en{" "}
            <a href="https://www.sercoplus.com" target="_blank" rel="noopener noreferrer">
              www.sercoplus.com
            </a>, y/u otros dominios. Cualquier persona que desee acceder y/o suscribirse y/o usar el Sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales y las Políticas de Privacidad.
            Los Términos y Condiciones y las Políticas de Privacidad contenidos en este instrumento se aplicarán y se entenderán como parte integral de todos los actos y contratos.
            En caso que las Empresas hubieran fijado sus propios Términos y Condiciones y sus Políticas de Privacidad para los actos y contratos que realicen en este sitio.{" "}
            <strong>
              CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES GENERALES Y LAS POLÍTICAS DE PRIVACIDAD, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O LOS SERVICIOS.
            </strong>
            <br />
            El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad de Sercoplus.
            Si el usuario hiciera uso del Sitio de www.sercoplus.com, ello implicará la aceptación plena de las condiciones establecidas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosYCondiciones;
