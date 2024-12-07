export default function Searchbar() {
  return (
    <div className="relative mx-auto max-w-full lg:max-w-md w-full">
      <input
        type="text"
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
