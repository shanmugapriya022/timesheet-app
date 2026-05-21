import React, { useState } from 'react';
import { mockProjects, Project } from '../data/mockData';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [newProject, setNewProject] = useState('');

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, { id: Date.now(), name: newProject }]);
      setNewProject('');
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white p-4 rounded shadow mb-4">
        <input type="text" value={newProject} onChange={e => setNewProject(e.target.value)} placeholder="New project name" className="border p-2 mr-2" />
        <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
      </div>
      <div className="bg-white p-4 rounded shadow"><h3 className="text-lg font-bold mb-2">Project List</h3><ul>{projects.map(p => <li key={p.id} className="border-b p-2">{p.name}</li>)}</ul></div>
    </div>
  );
};

export default Projects;