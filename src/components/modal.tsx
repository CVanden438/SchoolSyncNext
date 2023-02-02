import React from "react";

interface modalProps {
  children: React.ReactNode;
  shown: boolean;
  close: () => void;
}

const Modal: React.FC<modalProps> = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="relative h-fit w-fit rounded-lg bg-base-100 p-6"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close} className="absolute top-1 right-1">
          Close
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
