//..
import UserComp from "../components/User/UserComp"
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import { actGetAllUsers } from "../../src/store/admin/adminSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../layouts/PageLayout/PageLayout";
import UsersTable from "../components/User/UserTable";
import { actLogout } from "../store/Auth/authSlice";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {allUsers, loading, error} = useAppSelector((state) => state.admin);
  

  useEffect(() => {
    if (error === "Invalid token. Please log in again.") {
      localStorage.removeItem("auth");
      dispatch(actLogout());
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [navigate, dispatch, error]); 

  useEffect(() => {
    dispatch(actGetAllUsers());
  }, [dispatch]);


  console.log('fire');
  return (
    <PageLayout title="AllUsers">
      {loading === 'pending' && <p>Loading...</p>}
      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      <UsersTable allUsers={allUsers}/>
    </PageLayout>
  )
}
