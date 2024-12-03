import Task from "../components/Task.tsx/Task"

export default function Tasks() {
  return (
    <div>
      <Task
        id={1}
        title="Task 1"
        description="Task 1 description"
        deadline={new Date()}
        assigned_to={1}
        status="pending"
        createdAt={new Date()}
        updatedAt={new Date()}
      
      />
    </div>
  )
}
