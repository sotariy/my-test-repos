import { useState } from 'react';
import Modal from './Modal';
import './Modal.css';
import './AddUserButton.css';

export default function AddUserButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика добавления пользователя
        setIsModalOpen(false);
    };

    return (
        <>
            <button className="add-user" onClick={() => setIsModalOpen(true)}>
                Добавить
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Добавить пользователя</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">ФИО:</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Компания:</label>
                        <input type="text" id="company" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="group">Группа:</label>
                        <input type="text" id="group" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Добавить</button>
                        <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                            Отмена
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
} 