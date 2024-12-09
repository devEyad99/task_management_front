import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthSignup } from "../store/Auth/authSlice";
import Input from "../components/common/Input/Input";
import PageLayout from "../layouts/PageLayout/PageLayout";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(actAuthSignup({ name, email, password, role }));
  };
  

  useEffect(() => {
    if (loading === 'succeeded') {
      setShowMessage(true);
      setTimeout(()=>{
        setRedirectToLogin(true);
      }, 3000)
    }
  }, [loading]);
  
  if (redirectToLogin) {
    
    return <Navigate to="/login" />;
  }
  


  return (
    <PageLayout title="Sign Up">
      <div>
        <form
        onSubmit={handleSubmit}         
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl"
        >
         <Input
         label="name"
          htmlFor="name"
          type="text"
          id="name"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
         />  
          <Input
          label="Email"
          htmlFor="email"
          type="email"
          id="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input
          label="Password"
          htmlFor="password"
          type="password"
          id="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Input
          label="Role"
          htmlFor="role"
          type="text"
          id="role"
          placeholder="enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          />
          <button
          disabled={loading === 'pending'}
            type="submit"
            className="mt-4 bg-primaryBlue text-white font-semibold py-2 px-4 rounded-md hover:bg-primaryBlue-dark"
          >
            {loading === 'pending' ? 'wait while regisster...' : 'Sign Up'}
          </button>
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
        </form>
      {/* Display success message */}
      {showMessage && (
          <div className="mt-6 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your account has been created. Redirecting to login...
            </span>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
