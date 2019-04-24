import React, { useEffect, useCallback } from 'react';
import './Modal.css';

export default function Modal(props) {
  const { onClose } = props;

  const handleKeypress = useCallback(
    e => {
      if (e.key === 'Escape') onClose();
    },
    [props],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [props]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
}
