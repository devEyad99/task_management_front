//..
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { actGetUsers } from "../../store/users/usersTasksSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";



export default function User() {
  const dispatch = useAppDispatch();
  const {users, loading, error} = useAppSelector((state) => state.users);
 
  console.log(users);
  
  useEffect(() => {
    dispatch(actGetUsers());
  }, [dispatch]);
  if (loading === 'pending') {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('fire');
  
  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>
              <img src={user.profile_image} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

}

