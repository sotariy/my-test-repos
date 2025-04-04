import { useState, useEffect } from 'react';
import Modal from './Modal';
import { IUser } from './types';
import { useUsers } from './UserContext';
import './Modal.css';

interface EditUserModalProps {
    user: IUser;
    isOpen: boolean;
    onClose: () => void;
}

export default function EditUserModal({ user, isOpen, onClose }: EditUserModalProps) {
    const { editUser, deleteUser } = useUsers();
    const [formData, setFormData] = useState({
        name: user.name,
        company: user.company,
        group: user.group,
        presence: user.presence
    });

    const groups = ['Прохожий', 'Клиент', 'Партнер'];
    useEffect(() => {
        setFormData({
            name: user.name,
            company: user.company,
            group: user.group,
            presence: user.presence
        });
    }, [user]);

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
        editUser(user.id, formData);
        onClose();
    };

    const handleDelete = () => {
        if (window.confirm('Вы уверены, что хотите удалить этого пользователя?')) {
            deleteUser(user.id);
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
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
                    <button type="submit" className="submit-btn">Сохранить</button>
                    <button type="button" className="delete-btn" onClick={handleDelete}>
                        Удалить
                    </button>
                    <button type="button" className="cancel-btn" onClick={onClose}>
                        Закрыть
                    </button>
                </div>
            </form>
        </Modal>
    );
} 