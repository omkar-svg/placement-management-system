
import { useEffect, useId } from "react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
}) => {
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
        overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm"
      onMouseDown={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative my-auto w-full max-w-lg rounded-xl
          bg-white p-6 shadow-xl"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            id={titleId}
            className="text-xl font-semibold text-slate-900"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg px-3 py-1 text-2xl text-slate-500
              transition hover:bg-slate-100 hover:text-slate-900"
          >
            &times;
          </button>
        </div>

        <div className="text-slate-600">
          {children}
        </div>

        {(onCancel || onConfirm) && (
          <div className="mt-6 flex flex-wrap justify-end gap-3">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="rounded-lg border border-slate-300
                  px-4 py-2 text-slate-700 transition
                  hover:bg-slate-100"
              >
                {cancelText}
              </button>
            )}

            {onConfirm && (
              <button
                type="button"
                onClick={onConfirm}
                className="rounded-lg bg-blue-600 px-4 py-2
                  text-white transition hover:bg-blue-700"
              >
                {confirmText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
