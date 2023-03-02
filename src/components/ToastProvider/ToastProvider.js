import React from 'react';
import { useEscapeKey } from '../../hooks/customHooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToastList([]);
  }, []);

  useEscapeKey(handleEscape);

  function handleAddToast(message, variantChecked) {
    setToastList([
      ...toastList,
      {
        key: crypto.randomUUID(),
        message: message,
        variant: variantChecked,
      },
    ]);
  }

  function handleRemoveToast(key) {
    const newToastList = toastList.filter((object) => {
      return object.key !== key;
    });

    setToastList(newToastList);
  }

  return (
    <ToastContext.Provider
      value={{
        toastList,
        handleAddToast,
        handleRemoveToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
