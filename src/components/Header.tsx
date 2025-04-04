import logo from "../assets/logo.svg"
import AddUserButton from "./AddUserButton"
import { useUsers } from './UserContext'

export default function Header() {
    const { users, searchQuery, setSearchQuery, filteredUsers } = useUsers();

    const presentCount = filteredUsers.filter(user => user.presence).length;
    const absentCount = filteredUsers.filter(user => !user.presence).length;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo" />
                <input 
                    type="text" 
                    placeholder="Поиск по имени" 
                    value={searchQuery}
                    onChange={handleSearch}
                />
                {/* <button className="add-user">Добавить</button> */}
                <AddUserButton />
            </div>

            <div className="users">
                <p className="visitors">Посетители</p>
                <div className="count">
                    <span className="partner">{presentCount}</span>
                    <span className="slash">/</span>
                    <span className="passerby">{absentCount}</span>
                </div>
            </div>

        </header>
    )
}