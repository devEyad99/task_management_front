import { ReactNode } from "react";
import { useAppSelector } from "../../../store/hooks";

interface ProtectedProps {
  children: ReactNode;
}

export const Protected = ({ children }: ProtectedProps) => {
  const { user } = useAppSelector((state) => state.auth);
 const role = user?.role;
 
  if (role !== "admin") {
    return (
      <div className="text-red-500 text-center mt-8">
        You are not authorized to access this route.
      </div>
    );
  }

  return <>{children}</>;
};
