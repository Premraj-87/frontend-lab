import {
  PieChart,
  Pie,
  Tooltip,
  Legend
} from "recharts";

const TodoPieChart = ({ stats }) => {

  const data = [
    {
      name: "Completed",
      value: stats.completed,
    },
    {
      name: "Pending",
      value: stats.pending,
    },
  ];

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
      />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TodoPieChart;