import { useState } from 'react';
import './Table.css';
import { useUsers } from './UserContext';
import EditUserModal from './EditUserModal';
import { IUser } from './types';

export default function Table() {
    const { filteredUsers, editUser } = useUsers();
    const [editingUser, setEditingUser] = useState<IUser | null>(null);

    const handlePresenceClick = (e: React.MouseEvent, user: IUser) => {
        e.stopPropagation(); // Предотвращаем открытие модального окна
        editUser(user.id, {
            ...user,
            presence: !user.presence
        });
    };

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th>Номер</th>
                        <th>ФИО</th>
                        <th>Компания</th>
                        <th>Группа</th>
                        <th>Присутствие</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers && filteredUsers.map((user) => (
                        <tr 
                            key={user.id} 
                            className="table-row"
                            onClick={() => setEditingUser(user)}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                            <td>{user.group}</td>
                            <td>
                                <div 
                                    className={`presence-indicator ${user.presence ? 'present' : 'absent'}`}
                                    onClick={(e) => handlePresenceClick(e, user)}
                                    title={user.presence ? 'Присутствует' : 'Отсутствует'}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    isOpen={true}
                    onClose={() => setEditingUser(null)}
                />
            )}
        </div>
    );
}
