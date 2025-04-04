export interface IUser {
    id: number;
    name: string;
    company: string;
    group: string;
    presence: boolean;
}

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export interface IAddUserFormProps {
    onAddUser: (user: Omit<IUser, 'id'>) => void;
}