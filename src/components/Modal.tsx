import close_image from '../assets/close_image.svg'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
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
