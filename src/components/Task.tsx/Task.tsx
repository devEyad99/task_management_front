
import { ITask } from "../../types";

export default function Task({
  title,
  description,
  deadline,
  assigned_to,
  status,
  createdAt,
  updatedAt,
}:ITask) {
  

  return (
    <tr className="hover:bg-gray-50 text-gray-800 text-sm">
      <td className="p-3 border-b">{title}</td>
      <td className="p-3 border-b">{description}</td>
      <td className="p-3 border-b">{new Date(deadline).toLocaleString()}</td>
      <td className="p-3 border-b">{assigned_to}</td>
      <td
        className={`p-3 border-b ${
          status === "completed"
            ? "text-green-600 font-semibold"
            : status === "in-progress"
            ? "text-yellow-600 font-semibold"
            : "text-red-600 font-semibold"
        }`}
      >
        {status}
      </td>
      <td className="p-3 border-b">{new Date(createdAt).toLocaleString()}</td>
      <td className="p-3 border-b">{new Date(updatedAt).toLocaleString()}</td>
    </tr>
  );
}