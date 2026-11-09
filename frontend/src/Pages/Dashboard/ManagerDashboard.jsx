import ProgressRing from "./Components/ProgressRing";

function ManagerDashboard() {
  // Temporary figures for the Manager Dashboard.
  // These will later come from the backend API.
  const stats = [
    {
      title: "My Projects",
      value: 5,
      description: "Projects assigned to me",
    },
    {
      title: "Total Tasks",
      value: 42,
      description: "Tasks in my projects",
    },
    {
      title: "Completed Tasks",
      value: 28,
      description: "Tasks completed",
    },
    {
      title: "Pending Tasks",
      value: 14,
      description: "Tasks remaining",
    },
  ];

  // Sample progress of projects managed by the current user.
  const projects = [
    { name: "Website Redesign", progress: 75 },
    { name: "Mobile App Development", progress: 45 },
    { name: "CRM Integration", progress: 90 },
  ];

  // Sample task distribution among team members.
  const teamWorkload = [
    { name: "Member 1", tasks: 8 },
    { name: "Member 2", tasks: 6 },
    { name: "Member 3", tasks: 5 },
  ];
  // Get task counts from the dashboard statistics.
  const completedTasks = stats.find(
    (stat) => stat.title === "Completed Tasks"
  ).value;

  const totalTasks = stats.find(
    (stat) => stat.title === "Total Tasks"
  ).value;

  // Calculate the overall task completion percentage.
  // If there are no tasks, show 0% instead of an invalid result.
  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);
  return (
    <div className="manager-dashboard">
      <div className="dashboard-heading">
        <h2>Project Manager Dashboard</h2>
        <p>Monitor your projects and team progress.</p>
      </div>

      {/* Summary of projects and tasks */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h6>{stat.title}</h6>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Shows how far each managed project has progressed */}
      <section className="overview-section">
        <h3>Project Progress</h3>

        <div className="manager-project-list">
          {projects.map((project) => (
            <div className="manager-project-card" key={project.name}>
              <h4>{project.name}</h4>

              {/* Circular indicator for this project's completion percentage. */}
              <ProgressRing
                percentage={project.progress}
                size={140}
                radius={58}
                gradientId={`project-${project.name.replace(/\s+/g, "-")}`}
                colors={["#14b8a6", "#14b8a6"]}
                className="project-progress"
                backgroundClassName="project-progress-bg"
                fillClassName="project-progress-fill"
                textClassName="project-progress-text"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Shows the overall task completion across managed projects */}
      <section className="progress-section manager-completion">
        <h3>Overall Task Completion</h3>

        <div className="completion-content">
          <ProgressRing
            percentage={completionPercentage}
            label="COMPLETED"
            size={160}
            radius={68}
            gradientId="managerCompletionGradient"
            colors={["#14b8a6", "#22c55e"]}
          />

          <p>
            {completedTasks} out of {totalTasks} tasks completed
          </p>
        </div>
      </section>
      {/* Shows how tasks are distributed across the team */}
      <section className="overview-section">
        <h3>Team Workload</h3>

        <div className="overview-grid">
          {teamWorkload.map((member) => (
            <div className="overview-card" key={member.name}>
              <h6>{member.name}</h6>
              <h3>{member.tasks}</h3>
              <p>Assigned tasks</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ManagerDashboard;
