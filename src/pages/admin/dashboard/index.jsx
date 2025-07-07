import { useDashboard } from "./hooks";
const Dashboard = () => {
  const {} = useDashboard();
  return <div className="p-2">Welcome to Dashboard</div>;
};

export default Dashboard;
