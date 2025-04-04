import { useState } from 'react';
import Modal from './Modal';
import './Modal.css';
import './AddUserButton.css';
import { useUsers } from './UserContext';

export default function AddUserButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addUser } = useUsers();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        group: '',
        presence: false
    });

    const groups = ['Прохожий', 'Клиент', 'Партнер'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            presence: e.target.checked
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        addUser({
            name: formData.name,
            company: formData.company,
            group: formData.group,
            presence: formData.presence
        });
        
        setFormData({
            name: '',
            company: '',
            group: '',
            presence: false
        });
        
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
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="company">Компания</label>
                        <input 
                            type="text" 
                            id="company" 
                            value={formData.company}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="group">Группа</label>
                        <select 
                            id="group" 
                            value={formData.group}
                            onChange={handleInputChange}
                            required
                        >
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
                                checked={formData.presence}
                                onChange={handleCheckboxChange}
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