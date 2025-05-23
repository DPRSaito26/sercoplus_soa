import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";

import NavbarDashboard from "../components/NavbarDashboard"; // 👈 Aquí va
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import FAQ from "./FAQ";
import Profile from "./Profile";
import Transfers from "./Transfers";

export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });

    sr.reveal(
      `
        .row__one,
        .row__two
      `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <Section>
      <NavbarDashboard /> {/* 👈 Se muestra solo aquí */}
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  );
}


const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  min-height: 100vh;
  background-color: #0f0f0f;
  color: white;

  .grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }

  @media screen and (max-width: 1080px) {
    margin-left: 0;

    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;
