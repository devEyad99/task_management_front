
interface TaskProps {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  assigned_to: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Task({id,
  title,
  description,
  deadline,
  assigned_to,
  status,
  createdAt,
  updatedAt
 }: TaskProps) {
  return (
    <div>
      <h1>{`id: ${id}`}</h1>
      <h2>{`title: ${title}`}</h2>
      <p>{`desc: ${description}`}</p>
      <p>{`deadline: ${deadline.toString()}`}</p>
      <p>{`assigned_to : ${assigned_to}`}</p>
      <p>{`status: ${status}`}</p>
      <p>{`createdAt: ${createdAt.toString()}`}</p>
      <p>{`updatedAt: ${updatedAt.toString()}`}</p>
    </div>
  )
}
