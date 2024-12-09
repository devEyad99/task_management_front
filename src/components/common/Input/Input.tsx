

interface InputProps {
  label: string;
  type: string;
  id: string;
  htmlFor: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  value,
  onChange,
  htmlFor,
  type,
  id,
  placeholder,
}: InputProps): JSX.Element {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="mt-1 block w-full h-12 rounded-md shadow-sm sm:text-sm"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
