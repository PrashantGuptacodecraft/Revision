import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Polls() {
  const [votes, setVotes] = useState([0, 0, 0]);

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>Poll</h2>

        <p>Best Event?</p>

        <button onClick={()=>vote(0)}>DJ Night</button>
        <button onClick={()=>vote(1)}>Hackathon</button>
        <button onClick={()=>vote(2)}>Fest</button>

        <h3>Results</h3>
        <p>DJ Night: {votes[0]}</p>
        <p>Hackathon: {votes[1]}</p>
        <p>Fest: {votes[2]}</p>
      </div>
    </div>
  );
}