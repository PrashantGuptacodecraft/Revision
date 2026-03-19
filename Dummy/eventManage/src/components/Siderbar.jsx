import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#1e293b", color: "white", height: "100vh", padding: "20px" }}>
      <h3>Campus Hub</h3>
      <p><Link to="/dashboard" style={{color:"white"}}>Dashboard</Link></p>
      <p><Link to="/tasks" style={{color:"white"}}>Tasks</Link></p>
      <p><Link to="/polls" style={{color:"white"}}>Polls</Link></p>
    </div>
  );
}