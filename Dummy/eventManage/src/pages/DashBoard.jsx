import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={card}>Tasks: 5</div>
          <div style={card}>Events: 2</div>
          <div style={card}>Polls: 1</div>
        </div>

        <h3>Suggestion</h3>
        <p>Complete pending tasks today!</p>
      </div>
    </div>
  );
}

const card = {
  padding: "20px",
  background: "#e2e8f0",
  borderRadius: "10px"
};