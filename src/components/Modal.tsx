import { useEffect } from 'react';
import close_image from '../assets/close_image.svg'
import { IModalProps } from './types';
import './Modal.css';

export default function Modal({ isOpen, onClose, children }: IModalProps) {
    useEffect(() => {
        const handleEscapePress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapePress);

        return () => {
            document.removeEventListener('keydown', handleEscapePress);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button
                    className="modal-close"
                    onClick={onClose}>
                        <img className="modal-close-button" src={close_image} alt=""/>
                </button>
                {children}
            </div>
        </div>
    );
}
