import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import Title from "./Title";
const data = [
  { name: "Small Scale", value: 400 },
  { name: "Destination", value: 300 },
  { name: "Mega Budget", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"}>
      {`${name}`}
    </text>
  );
};

export default class Example extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Title>Types Of Events</Title>
        <PieChart width={400} height={240}>
          <Pie
            data={data}
            cx={260}
            cy={110}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </React.Fragment>
    );
  }
}
