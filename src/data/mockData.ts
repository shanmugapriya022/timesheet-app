export interface Project {
  id: number;
  name: string;
}

export interface TimesheetEntry {
  projectId: number;
  projectName: string;
  hours: {
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
  };
  total: number;
}

export const mockProjects: Project[] = [
  { id: 1, name: 'Alpha Project' },
  { id: 2, name: 'Beta Platform' },
  { id: 3, name: 'Gamma Integration' },
];

export const mockUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
  { id: 2, name: 'Employee User', email: 'employee@example.com', role: 'Employee' },
];

export const mockTimesheetData: TimesheetEntry[] = [
  {
    projectId: 1,
    projectName: 'Alpha Project',
    hours: { monday: 2, tuesday: 3, wednesday: 4, thursday: 2, friday: 1 },
    total: 12,
  },
  {
    projectId: 2,
    projectName: 'Beta Platform',
    hours: { monday: 1, tuesday: 1, wednesday: 2, thursday: 3, friday: 2 },
    total: 9,
  },
];