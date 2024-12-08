import React from "react";

interface ConfirmModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
}

export default function ConfirmModal({
  title,
  isOpen,
  onClose,
  onConfirm,
  children,
}: ConfirmModalProps) {
  // Ensure modal is not rendered when closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/5 md:w-2/5">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b">
          <h2 className="text-md text-black font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-4 text-black">{children}</div>

        {/* Footer */}
        <div className="flex justify-end p-3 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
