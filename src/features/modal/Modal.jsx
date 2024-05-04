import React, { useState } from 'react';
import './CoolModal.css';

function CoolModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Adjust timing to match animation duration
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className={`modal-background ${isClosing ? 'fadeOut' : 'fadeIn'}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoolModal;
