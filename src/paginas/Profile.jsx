import React from "react";
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import { FaUser } from "react-icons/fa";
import { cardStyles } from "../components/ReusableStyle"; // ✅ Ruta corregida

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="perfil" />
      </div>
      <div className="title">
        <h2>Diego Fernando</h2>
        <h5>
          <FaUser /> Admin
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Días Trabajados</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Horas</h5>
          <h3>76</h3>
        </div>
        <div className="container">
          <h5>Ciclo</h5>
          <h3>10</h3>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  .title {
    text-align: center;
    h2,
    h5 {
      color: #fe9808;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }

  .info {
    display: flex;
    gap: 1rem;

    .container {
      text-align: center;
    }
  }
`;
