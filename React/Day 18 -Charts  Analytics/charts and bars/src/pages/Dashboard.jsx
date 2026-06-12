import DashboardCards from "../components/DashboardCards";
import TodoPieChart from "../components/TodoPieChart";
import TodoBarChart from "../components/TodoBarChart";
import ProgressLineChart from "../components/ProgressLineChart";

import {
  todoStats,
  monthlyTodos,
  weeklyProgress,
} from "../data/analyticsData";

const Dashboard = () => {
  return (
    <div>

      <h1>Analytics Dashboard</h1>

      <DashboardCards
        stats={todoStats}
      />

      <TodoPieChart
        stats={todoStats}
      />

      <TodoBarChart
        data={monthlyTodos}
      />

      <ProgressLineChart
        data={weeklyProgress}
      />

    </div>
  );
};

export default Dashboard;