import { ITask } from "../../types";
import Task from "./Task";

interface TasksTableProps {
  tasks: ITask[];
}

export default function TasksTable({ tasks }: TasksTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
            <th className="p-3 border-b">Title</th>
            <th className="p-3 border-b">Description</th>
            <th className="p-3 border-b">Deadline</th>
            <th className="p-3 border-b">Assigned To</th>
            <th className="p-3 border-b">Status</th>
            <th className="p-3 border-b">Created At</th>
            <th className="p-3 border-b">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => <Task key={task.id} {...task} />)
          ) : (
            <tr>
              <td colSpan={7} className="p-3 text-center text-gray-500">
                No tasks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
