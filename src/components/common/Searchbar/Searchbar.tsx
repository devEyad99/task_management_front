import { useEffect, useState, useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { actGetAllTasks } from "../../../store/tasks/usersTasksSlice";

export default function Searchbar() {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Clear the existing timeout if the user types again
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout to dispatch the action after a delay
    debounceTimeout.current = setTimeout(() => {
      if (value.trim() === "") {
        // Dispatch an action to get all tasks when the query is cleared
        dispatch(actGetAllTasks({ title: "" }));
      } else {
        // Dispatch the search action with the query
        dispatch(actGetAllTasks({ title: value }));
    
      }
    }, 500); // 500ms debounce delay
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  // Use the `query` state to log only when it changes
  useEffect(() => {
    if (query) {
      console.log('fire search bar');
    }
  }, [query]);

  return (
    <div className="relative mx-auto max-w-full lg:max-w-md w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search tasks..."
        className="border-2 border-gray-300 bg-white text-gray-700 font-bold h-10 w-full px-5 pr-10 rounded-lg text-sm focus:outline-none focus:border-blue-500"
      />
      <svg
        className="absolute top-2.5 right-3 w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-5.2-5.2"
        />
      </svg>
    </div>
  );
}
