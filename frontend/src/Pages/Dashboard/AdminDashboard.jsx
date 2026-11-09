import ProgressRing from "./Components/ProgressRing";

function AdminDashboard() {
  // Sample figures for the initial dashboard layout.
  // These will be replaced with API data once the backend is ready.
  const stats = [
    {
      title: "Total Users",
      value: 48,
      description: "Registered users",
    },
    {
      title: "Total Projects",
      value: 12,
      description: "Projects created",
    },
    {
      title: "Total Tasks",
      value: 156,
      description: "Tasks across projects",
    },
    {
      title: "Completed Tasks",
      value: 98,
      description: "Tasks completed",
    },
  ];

  // A quick breakdown of project and task activity.
  const projectOverview = [
    { title: "Active Projects", value: 8 },
    { title: "Completed Projects", value: 4 },
    { title: "Pending Tasks", value: 23 },
    { title: "In Progress Tasks", value: 35 },
  ];
  // Calculate the overall task completion percentage.
  // Get completed and total task counts from the dashboard statistics.
  const completedTasks = stats.find(
    (stat) => stat.title === "Completed Tasks"
  ).value;

  const totalTasks = stats.find(
    (stat) => stat.title === "Total Tasks"
  ).value;

  // Avoid division by zero when there are no tasks.
  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);
  return (
    <div className="admin-dashboard">
      <div className="dashboard-heading">
        <h2>Admin Dashboard</h2>
        <p>Overview of your organization's activities.</p>
      </div>

      {/* Main statistics */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h6>{stat.title}</h6>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Project and task breakdown */}
      <section className="overview-section">
        <h3>Project Overview</h3>

        <div className="overview-grid">
          {projectOverview.map((item) => (
            <div className="overview-card" key={item.title}>
              <h6>{item.title}</h6>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Overall task completion */}
      <section className="progress-section">
        <h3>Overall Task Completion</h3>

        <div className="completion-content">
          <ProgressRing
            percentage={completionPercentage}
            label="COMPLETED"
            size={160}
            radius={68}
            gradientId="completionGradient"
            colors={["#a855f7", "#6366f1", "#06b6d4"]}
          />

          <p>
            {completedTasks} out of {totalTasks} tasks completed
          </p>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
