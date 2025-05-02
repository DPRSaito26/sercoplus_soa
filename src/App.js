import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.sercoplus.com/" title="Corporación Sercoplus">
            <img className="logo" src="https://www.sercoplus.com/img/corporacion-sercoplus-logo-1632849710.jpg" alt="Corporación Sercoplus" width="500" height="100" />
          </a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="container text-center" style={{ backgroundColor: 'red', color: 'white' }}>
        <ul className="nav nav_underline justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true" style={{ color: 'white' }}>Disabled</a>
          </li>
        </ul>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="carru1.jpg" className="d-block mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="carru2.jpg" className="d-block mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="carru3.png" className="d-block mx-auto" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
