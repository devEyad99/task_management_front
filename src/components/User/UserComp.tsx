//..
import { IUsers } from "../../types";

export default function UserComp({
  id,
  email, 
  name,
  role,
  createdAt,
}: IUsers) {
  
  
  return (
    <tr className="hover:bg-gray-50 text-gray-800 text-sm">
      <td className="p-3 border-b text-right">{id}</td>
      <td className="p-3 border-b text-right">{name}</td>
      <td className="p-3 border-b text-right">{email}</td>
      <td className="p-3 border-b text-right">{role}</td>
      <td className="p-3 border-b text-right">{new Date(createdAt).toLocaleDateString()}</td>
    </tr>
  );

}

