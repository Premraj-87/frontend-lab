const DashboardCards = ({ stats }) => {
  return (
    <div className="cards">

      <div className="card">
        <h2>{stats.total}</h2>
        <p>Total Todos</p>
      </div>

      <div className="card">
        <h2>{stats.completed}</h2>
        <p>Completed</p>
      </div>

      <div className="card">
        <h2>{stats.pending}</h2>
        <p>Pending</p>
      </div>

    </div>
  );
};

export default DashboardCards;