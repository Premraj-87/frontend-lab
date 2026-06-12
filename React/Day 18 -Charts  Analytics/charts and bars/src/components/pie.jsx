import {
  PieChart,
  Pie,
  Tooltip
} from "recharts";
import {data} from "../data/pieChart"
function TodoPieChart() {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={100}
      />

      <Tooltip />
    </PieChart>
  );
}

export default TodoPieChart;