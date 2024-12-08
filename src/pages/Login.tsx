import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actAuthLogin } from "../store/Auth/authSlice";

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
    <>
      <h1 className="flex flex-col items-center mb-3 text-xl">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl"
      >
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            className="mt-1 block w-full h-12 rounded-md shadow-sm sm:text-sm"
            type="email"
            id="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            className="mt-1 block w-full h-12 rounded-md shadow-sm sm:text-sm"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
          />
        </div>
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
    </>
  );
}