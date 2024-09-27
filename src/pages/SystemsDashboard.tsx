import React from "react";

const systems = [
  { name: "System 1", url: "https://system1.com" },
  { name: "System 2", url: "/system2" },
];

export const SystemsDashboard = () => {
  return (
    <div className='systems-dashboard'>
      <h1>Systems Dashboard</h1>
      <ul>
        {systems.map((system, index) => (
          <li key={index}>
            <a href={system.url} target='_blank' rel='noopener noreferrer'>
              {system.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
