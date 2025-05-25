import React from "react";
import styled from "styled-components";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineDollarCircle } from "react-icons/ai";

const dataBar = [
  { name: "Gastos", value: 700 },
  { name: "Ganancias", value: 350 },
  { name: "Actividad", value: 540 },
];

const dataPie = [
  { name: "Nuevos", value: 73 },
  { name: "Antiguos", value: 27 },
];

const dataLine = [
  { name: "Ene", ventas: 400, compras: 200 },
  { name: "Feb", ventas: 300, compras: 100 },
  { name: "Mar", ventas: 900, compras: 800 },
  { name: "Abr", ventas: 450, compras: 500 },
  { name: "May", ventas: 250, compras: 480 },
];

const dataArea = [
  { name: "Ene", utilidad: 200 },
  { name: "Feb", utilidad: 300 },
  { name: "Mar", utilidad: 800 },
  { name: "Abr", utilidad: 400 },
  { name: "May", utilidad: 500 },
];

export default function Graficos() {
  return (
    <Container>
      <TopBar>
        <h2>📊 Gráficos</h2>
        <User>
          <span>Diego Fernando</span>
          <img src="https://i.pravatar.cc/40?img=3" alt="Avatar" />
        </User>
      </TopBar>

      <Metrics>
        <Card>
          <AiOutlineShoppingCart />
          <div>
            <h4>Ventas</h4>
            <p>S/ 15,450</p>
          </div>
        </Card>
        <Card>
          <AiOutlineDollarCircle />
          <div>
            <h4>Utilidad</h4>
            <p>S/ 9,180</p>
          </div>
        </Card>
        <Card>
          <AiOutlineUser />
          <div>
            <h4>Clientes nuevos</h4>
            <p>321</p>
          </div>
        </Card>
      </Metrics>

      <ChartGrid>
        <ChartCard>
          <h4>Gastos, Ganancias y Actividad</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dataBar}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#fe9808" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h4>Clientes</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={dataPie} dataKey="value" nameKey="name" outerRadius={60} label>
                <Cell fill="#fe9808" />
                <Cell fill="#0055aa" />
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h4>Ventas vs Compras (Línea)</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dataLine}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#0055aa" />
              <Line type="monotone" dataKey="compras" stroke="#fe9808" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h4>Utilidad (Área)</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={dataArea}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="utilidad" stroke="#fe9808" fill="#fe9808" fillOpacity={0.4} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartGrid>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 18vw;
  padding: 2rem;
  background-color: #0f0f0f;
  min-height: 100vh;
  color: white;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    color: #fe9808;
  }

  img {
    border-radius: 50%;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Metrics = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: #fe9808;
  }

  h4 {
    margin: 0;
    font-weight: normal;
  }

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

const ChartCard = styled.div`
  background: #1e1e1e; // 👈 AQUÍ CAMBIAS EL FONDO DEL GRÁFICO
  border-radius: 10px;
  padding: 1rem;

  h4 {
    margin-bottom: 1rem;
    color: #fe9808;
  }

`;
