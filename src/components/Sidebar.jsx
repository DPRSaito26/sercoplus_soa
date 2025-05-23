import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import sercoplus from "../assets/corporacion-sercoplus-logo-blanco-1632849710.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FaAddressCard, FaUser, FaTruck } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiFillProduct } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import scrollreveal from "scrollreveal";

export default function Sidebar() {
  const [navbarState, setNavbarState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
        .brand,
        .links>ul>li:nth-of-type(1),
        .links>ul>li:nth-of-type(2),
        .links>ul>li:nth-of-type(3),
        .links>ul>li:nth-of-type(4),
        .links>ul>li:nth-of-type(5),
        .links>ul>li:nth-of-type(6),
        .links>ul>li:nth-of-type(7),
        .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tipoUsuario");
    navigate("/login");
  };

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <img
              src={sercoplus}
              alt="Logo"
              style={{ width: "278px", height: "60px" }}
            />
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li className={location.pathname === "/dashboard" ? "active" : "none"}>
                <Link to="/dashboard">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </Link>
              </li>
              <li className={location.pathname === "/usuarios" ? "active" : "none"}>
                <Link to="/usuarios">
                  <FaUser />
                  <span>Usuarios</span>
                </Link>
              </li>
              <li className={location.pathname === "/productos" ? "active" : "none"}>
                <Link to="/productos">
                  <AiFillProduct />
                  <span>Productos</span>
                </Link>
              </li>
              <li className={location.pathname === "/proveedores" ? "active" : "none"}>
                <Link to="/proveedores">
                  <FaTruck />
                  <span>Proveedores</span>
                </Link>
              </li>
              <li className={location.pathname === "/detalles" ? "active" : "none"}>
                <Link to="/detalles">
                  <FaAddressCard />
                  <span>Detalles de Pagos</span>
                </Link>
              </li>
              <li className={location.pathname === "/categorias" ? "active" : "none"}>
                <Link to="/categorias">
                  <MdCategory />
                  <span>Categorias</span>
                </Link>
              </li>
              <li className={location.pathname === "/graficos" ? "active" : "none"}>
                <Link to="/graficos">
                  <IoBarChartSharp />
                  <span>Graficos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <button onClick={handleLogout}>
            <FiLogOut />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #fe9808;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #fe9808;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #fe9808;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #fe9808;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;
