import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthLogin } from "../store/Auth/authSlice";
import PageLayout from "../layouts/PageLayout/PageLayout";
import Input from "../components/common/Input/Input";

export default function Login() {
  const dispatch = useAppDispatch();
  const { loading, error, token } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(actAuthLogin({ email, password }));
  };
  if (token) {
    return <Navigate to="/user-profile" />;

  }

  return (
    <PageLayout title="Sign In">
      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl"
      >
        <Input
        label="Email"
        htmlFor="email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
        />
       
        <Input
        label="Password"
        htmlFor="password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
        />

        <button
          disabled={loading === 'pending'}
          type="submit"
          className="mt-4 bg-primaryBlue text-white font-semibold py-2 px-4 rounded-md hover:bg-primaryBlue-dark"
        >
          {loading === 'pending' ? 'wait while logging in...' : 'Log In'}
        </button>
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </form>

      {/* Show error message */}
    </PageLayout>
  );
}