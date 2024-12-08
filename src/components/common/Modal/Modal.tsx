import react, {ReactNode} from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
  footer,
}: ModalProps) {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 w-full sm:w-96 rounded-lg shadow-lg">
//             <header className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">{title}</h2>
//               <button onClick={onClose}>&times;</button>
//             </header>
//             <main>{children}</main>
//             <footer>{footer}</footer>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

if(!isOpen) return null;

return (
  <div
    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
    role="dialog"
    aria-modal="true"
  >
    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/5 md:w-2/5">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-md font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
      </div>
      {/* Body */}
      <div className="p-4 max-h-[50vh] overflow-y-auto">{children}</div>
      {/* Footer */}
      {footer && <div className="flex justify-end p-3 border-t">{footer}</div>}
    </div>
  </div>
);
};
