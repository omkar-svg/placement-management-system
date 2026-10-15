import { useEffect, useId } from "react";

export default function Modal({
  isOpen,
  onClose,
  title = "Confirmation",
  children,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
}) {
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
      className="fixed inset-0 z-[9999] flex items-center
        justify-center overflow-y-auto bg-slate-900/50
        p-4 backdrop-blur-sm"
      onMouseDown={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="my-auto w-full max-w-lg rounded-2xl
          bg-white p-6 shadow-2xl ring-1 ring-black/10"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2
            id={titleId}
            className="text-xl font-bold text-slate-900"
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center
              rounded-full text-2xl text-slate-500
              transition hover:bg-slate-100 hover:text-slate-900"
          >
            &times;
          </button>
        </div>

        <div className="text-sm leading-6 text-slate-600">
          {children}
        </div>

        {(onCancel || onConfirm) && (
          <div className="mt-7 flex flex-wrap justify-end gap-3">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="rounded-lg border border-slate-300
                  px-5 py-2.5 font-medium text-slate-700
                  transition hover:bg-slate-100"
              >
                {cancelText}
              </button>
            )}

            {onConfirm && (
              <button
                type="button"
                onClick={onConfirm}
                className="rounded-lg bg-blue-600 px-5 py-2.5
                  font-medium text-white shadow-sm transition
                  hover:bg-blue-700 focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2"
              >
                {confirmText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```
