//..

export type ITask = {
  id: number;
  title: string;
  description: string;
  status: string;
  deadline: Date;
  assigned_to: number;
  createdAt: Date;
  updatedAt: Date;
};
