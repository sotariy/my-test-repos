import React, { createContext, useState, useContext, useEffect } from 'react';
import { IUser } from './types';

type FilterType = 'all' | 'present' | 'absent';

interface UserContextType {
    users: IUser[];
    addUser: (user: Omit<IUser, 'id'>) => void;
    editUser: (id: number, userData: Omit<IUser, 'id'>) => void;
    deleteUser: (id: number) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredUsers: IUser[];
    filterType: FilterType;
    setFilterType: (filter: FilterType) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEY = 'react_app_users';

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<IUser[]>(() => {
        try {
            const savedUsers = localStorage.getItem(STORAGE_KEY);
            return savedUsers ? JSON.parse(savedUsers) : [];
        } catch (error) {
            console.error('Ошибка при загрузке пользователей:', error);
            return [];
        }
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<FilterType>('all');

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());

        switch (filterType) {
            case 'present':
                return matchesSearch && user.presence;
            case 'absent':
                return matchesSearch && !user.presence;
            default:
                return matchesSearch;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        } catch (error) {
            console.error('Ошибка при сохранении пользователей:', error);
        }
    }, [users]);

    const addUser = (userData: Omit<IUser, 'id'>) => {
        setUsers(prev => {
            const maxId = prev.reduce((max, user) => Math.max(max, user.id), 0);
            const newUser: IUser = {
                ...userData,
                id: maxId + 1
            };
            return [...prev, newUser];
        });
    };

    const editUser = (id: number, userData: Omit<IUser, 'id'>) => {
        setUsers(prev => prev.map(user => 
            user.id === id 
                ? { ...userData, id } 
                : user
        ));
    };

    const deleteUser = (id: number) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };

    const contextValue = {
        users,
        addUser,
        editUser,
        deleteUser,
        searchQuery,
        setSearchQuery,
        filteredUsers,
        filterType,
        setFilterType
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUsers must be used within a UserProvider');
    }
    return context;
} 