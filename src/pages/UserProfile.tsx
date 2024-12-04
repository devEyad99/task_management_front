import { useAppSelector } from "../store/hooks"

export default function UserProfile() {
  const {user} = useAppSelector(state => state.auth);
  console.log(user)
  return (
    <div>
      <h1>User Profile</h1>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
    </div>
  )
}
