import React, { useState } from 'react';
import { mockProjects, mockTimesheetData, TimesheetEntry as TimesheetEntryType } from '../../data/mockData';

const TimesheetEntry: React.FC = () => {
  const [entries, setEntries] = useState<TimesheetEntryType[]>(mockTimesheetData);
  const [selectedProject, setSelectedProject] = useState('');
  const [hours, setHours] = useState({ monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 });

  const addEntry = () => {
    if (!selectedProject) return;
    const project = mockProjects.find(p => p.name === selectedProject);
    if (!project) return;
    const total = Object.values(hours).reduce((a,b) => a+b, 0);
    const newEntry: TimesheetEntryType = {
      projectId: project.id,
      projectName: project.name,
      hours,
      total,
    };
    setEntries([...entries, newEntry]);
    setSelectedProject('');
    setHours({ monday:0, tuesday:0, wednesday:0, thursday:0, friday:0 });
  };

  const totalWeekly = entries.reduce((sum, e) => sum + e.total, 0);

  return (
    <div className="p-6">
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-bold mb-4">Add Daily Hours</h3>
        <select value={selectedProject} onChange={e => setSelectedProject(e.target.value)} className="border p-2 mb-2 w-full">
          <option value="">Select Project</option>
          {mockProjects.map(p => <option key={p.id}>{p.name}</option>)}
        </select>
        <div className="grid grid-cols-5 gap-2 mb-2">
          {['monday','tuesday','wednesday','thursday','friday'].map(day => (
            <input key={day} type="number" placeholder={day} value={hours[day as keyof typeof hours]} onChange={e => setHours({...hours, [day]: parseInt(e.target.value) || 0})} className="border p-2" />
          ))}
        </div>
        <button onClick={addEntry} className="bg-blue-500 text-white px-4 py-2 rounded">Add Entry</button>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">My Timesheet</h3>
        <table className="min-w-full border">
          <thead><tr className="bg-gray-200"><th>Project</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Total</th></tr></thead>
          <tbody>
            {entries.map(e => (
              <tr key={e.projectId}><td className="p-2 border">{e.projectName}</td>
                <td className="p-2 border">{e.hours.monday}</td><td>{e.hours.tuesday}</td><td>{e.hours.wednesday}</td><td>{e.hours.thursday}</td><td>{e.hours.friday}</td>
                <td className="p-2 border font-bold">{e.total}</td></tr>
            ))}
          </tbody>
          <tfoot><tr className="bg-gray-100"><td colSpan={6} className="p-2 text-right font-bold">Total Hours:</td><td className="p-2 font-bold">{totalWeekly}</td></tr></tfoot>
        </table>
      </div>
    </div>
  );
};

export default TimesheetEntry;