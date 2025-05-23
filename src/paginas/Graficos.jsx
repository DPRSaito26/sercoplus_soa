import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  // RadarChart,
  // PolarGrid,
  // PolarAngleAxis,
  // PolarRadiusAxis,
  // Radar,
} from "recharts";

const data = [
  { name: "Gastos", value: 682.5 },
  { name: "Ganancias", value: 350.4 },
  { name: "Actividad", value: 540.5 },
];

const clientesData = [
  { name: "Nuevos clientes", value: 321 },
  { name: "Clientes antiguos", value: 120 },
];

const lineData = [
  { mes: "Ene", ventas: 400, compras: 240 },
  { mes: "Feb", ventas: 300, compras: 139 },
  { mes: "Mar", ventas: 200, compras: 980 },
  { mes: "Abr", ventas: 278, compras: 390 },
  { mes: "May", ventas: 189, compras: 480 },
];

const areaData = [
  { mes: "Ene", utilidad: 240 },
  { mes: "Feb", utilidad: 139 },
  { mes: "Mar", utilidad: 980 },
  { mes: "Abr", utilidad: 390 },
  { mes: "May", utilidad: 480 },
];

const COLORS = ["#fe9808", "#1976d2", "#d32f2f"];

export default function Graficos() {
  return (
    <Section>
      <div className="title">
        <h2>Gráficos</h2>
      </div>
      <div className="charts">
        <div>
          <h4>Gastos, Ganancias y Actividad</h4>
          <BarChart width={460} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#fe9808" />
          </BarChart>
        </div>

        <div>
          <h4>Clientes</h4>
          <PieChart width={460} height={250}>
            <Pie
              data={clientesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {clientesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="row">
          <div>
            <h4>Ventas vs Compras (Línea)</h4>
            <LineChart width={460} height={250} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#1976d2" />
              <Line type="monotone" dataKey="compras" stroke="#fe9808" />
            </LineChart>
          </div>
          <div>
            <h4>Utilidad (Área)</h4>
            <AreaChart width={460} height={250} data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="utilidad"
                stroke="#d32f2f"
                fill="#fe9808"
              />
            </AreaChart>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    h2 {
      color: #fe9808;
      letter-spacing: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  .charts {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    > div {
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      padding: 1rem;
      min-width: 460px;
      margin-bottom: 1rem;
    }

    .row {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      background: none;
      box-shadow: none;
      padding: 0;
      min-width: unset;
      margin-bottom: 2rem;

      > div {
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        padding: 1rem;
        min-width: 460px;
      }
    }

    h4 {
      text-align: center;
      margin-bottom: 1rem;
      color: #1976d2;
    }
  }
`;
