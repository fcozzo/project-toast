import React from "react";

// initialize context and use placeholders for methods
const ToastContext = React.createContext({ toasts: [], add() {}, remove() {} });

function ToastProvider({ children }) {
  // the list of toasts
  const [toasts, setToasts] = React.useState([]);

  // a method for adding a new toast
  const add = React.useCallback(
    (toast) => {
      setToasts([...toasts, { id: crypto.randomUUID(), ...toast }]);
    },
    [toasts]
  );

  // a method for removing a toast
  const remove = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    },
    [toasts]
  );

  return (
    <ToastContext value={{ toasts, add, remove }}>{children}</ToastContext>
  );
}

export default ToastProvider;

// renaming the export since consumers won't be using the context as a provider
export { ToastContext as toastContext };
