import UserComp from "./UserComp";
import { IUsers } from "../../types";

interface UsersTableProps {
  allUsers: IUsers[];
}

export default function UsersTable({ allUsers }: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
            <th className="p-3 border-b text-right">ID</th>
            <th className="p-3 border-b text-right">Name</th>
            <th className="p-3 border-b text-right">Email</th>
            <th className="p-3 border-b text-right">Role</th>
            <th className="p-3 border-b text-right">Employment Start Date</th>
          </tr>
        </thead>
        <tbody>
          {allUsers && allUsers.length > 0 ? (
            allUsers.map((user) => <UserComp key={user.id} {...user} />)
          ) : (
            <tr>
              <td colSpan={5} className="p-3 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};