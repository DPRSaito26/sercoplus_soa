import React from 'react';
import '../styles/principal.css'; // asegúrate que los estilos estén aquí

const Footer = () => (
  <footer className="text-white py-2" style={{ backgroundColor: '#fe9808', fontSize: '0.8rem' }}>
    <div className="container">
      <div className="row justify-content-between align-items-start">

        {/* Columna 1: Logo y contacto */}
        <div className="col-md-4 mb-2">
          <img
            src="./img/footer/footersercoplus.PNG"
            alt="Logo SERCOPLUS"
            style={{ maxHeight: '40px', maxWidth: '160px', objectFit: 'contain' }}
            className="mb-2"
          />
          <p className="mb-1"><strong>Ventas:</strong> 922118232 - 905467164 - 946561832 - 981023848 - 981025646 - 959287630 - 959284743</p>
          <p className="mb-1"><strong>Email:</strong> ventas@sercoplus.com</p>
          <p className="mb-1"><strong>Dirección:</strong> Av. Garcilaso de la Vega 1248–1250, Galería Compuwilson (Tienda 201)</p>
          <p className="mb-1"><strong>WhatsApp Garantía:</strong> 959283589</p>
          <p className="mb-2"><strong>Dirección de Soporte:</strong> Av. Garcilaso de la Vega, Tienda 107</p>

          <h6 className="mt-2">SÍGUENOS</h6>
          <div className="d-flex gap-2">
            <img src="./img/footer/facebook.png" alt="Facebook" width="20" />
            <img src="./img/footer/x.png" alt="X" width="20" />
            <img src="./img/footer/instagram.png" alt="Instagram" width="20" />
          </div>
        </div>

        {/* Columna 2: Información */}
        <div className="col-md-3 mb-2">
          <h6><strong>INFORMACIÓN</strong></h6>
          <ul className="list-unstyled mb-0">
            <li>&#187; Términos y condiciones</li>
            <li>&#187; Nuestra Empresa</li>
            <li>&#187; Medios de Pago</li>
            <li>&#187; Términos y condiciones para Sorteos</li>
            <li>&#187; Términos y condiciones para Envío gratis</li>
          </ul>
        </div>

        {/* Columna 3: Políticas */}
        <div className="col-md-3 mb-2">
          <h6><strong>POLÍTICAS Y CONDICIONES</strong></h6>
          <ul className="list-unstyled mb-1">
            <li>&#187; Política de Cookies</li>
            <li>&#187; Política de Privacidad de Datos Personales</li>
            <li>&#187; Política de Envío</li>
            <li>&#187; Política de garantías</li>
          </ul>
          <img src="./img/footer/libro.png" alt="Libro de Reclamaciones" width="70" />
        </div>

      </div>

      <hr className="bg-white mt-2 mb-1" />

      {/* Pie final */}
      <div className="d-flex justify-content-between align-items-center">
        <small>© 2025 Corporación Sercoplus SAC. Todos los derechos reservados</small>
        <img src="./img/footer/tarjetas.png" alt="Visa Mastercard Interbank BBVA BCP" height="22" />
      </div>
    </div>
  </footer>
);

export default Footer;
