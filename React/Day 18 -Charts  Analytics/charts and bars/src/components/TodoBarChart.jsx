import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const TodoBarChart = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="todos" />
    </BarChart>
  );
};

export default TodoBarChart;