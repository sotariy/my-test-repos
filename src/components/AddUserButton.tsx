import { useState } from 'react';
import Modal from './Modal';
import './Modal.css';
import './AddUserButton.css';

export default function AddUserButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [presence, setPresence] = useState(false);

    const groups = ['Прохожий', 'Клиент', 'Партнер'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Добавить логику добавления пользователя 
        setIsModalOpen(false);
    };

    return (
        <>
            <button className="add-user" onClick={() => setIsModalOpen(true)}>
                Добавить
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="name">ФИО</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="company">Компания</label>
                        <input type="text" id="company" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="group">Группа</label>
                        <select id="group" required>
                            <option value="">Выбрать</option>
                            {groups.map((group) => (
                                <option key={group} value={group}>
                                    {group}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="form-row-checkbox">
                            <label htmlFor="presence">Присутствие</label>
                            <input 
                                type="checkbox" 
                                id="presence" 
                                checked={presence}
                                onChange={(e) => setPresence(e.target.checked)}
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Добавить</button>
                        <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                            Закрыть
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
} 