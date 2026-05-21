import React from 'react';
import { mockTimesheetData, mockProjects } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const totalHours = mockTimesheetData.reduce((sum, entry) => sum + entry.total, 0);
  const weeklyTable = () => (
    <table className="min-w-full bg-white border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Project</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Total</th>
        </tr>
      </thead>
      <tbody>
        {mockTimesheetData.map(entry => (
          <tr key={entry.projectId}>
            <td className="p-2 border">{entry.projectName}</td>
            <td className="p-2 border">{entry.hours.monday}</td>
            <td className="p-2 border">{entry.hours.tuesday}</td>
            <td className="p-2 border">{entry.hours.wednesday}</td>
            <td className="p-2 border">{entry.hours.thursday}</td>
            <td className="p-2 border">{entry.hours.friday}</td>
            <td className="p-2 border font-bold">{entry.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow"><h3 className="text-lg font-bold">Total Hours</h3><p className="text-3xl text-blue-600">{totalHours}</p></div>
        <div className="bg-white p-4 rounded shadow"><h3 className="text-lg font-bold">Projects</h3><p className="text-3xl text-blue-600">{mockProjects.length}</p></div>
      </div>
      <div className="bg-white p-4 rounded shadow"><h3 className="text-lg font-bold mb-4">Weekly Timesheet</h3>{weeklyTable()}</div>
    </div>
  );
};

export default Dashboard;