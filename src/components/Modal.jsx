import React, { useState } from "react";

const Modal = ({ title, onClose, children, className, isLoading, error }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Duración de la animación
  };

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`bg-content-bg rounded-lg shadow-lg w-[90%] max-w-lg p-6 relative transform transition-transform duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        } ${className}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-transparent text-white font-bold rounded-full w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>
        <h2 className="text-xl text-white font-bold mb-4">{title}</h2>
        {isLoading && <p className="text-center text-gray-500">Cargando...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;