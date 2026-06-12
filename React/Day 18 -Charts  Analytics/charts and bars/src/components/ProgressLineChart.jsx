import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const ProgressLineChart = ({ data }) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />

      <Line
        type="monotone"
        dataKey="completed"
      />
    </LineChart>
  );
};

export default ProgressLineChart;