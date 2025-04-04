import logo from "../assets/logo.svg"
import AddUserButton from "./AddUserButton"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo" />
                <input type="text" placeholder="Поиск по имени" />
                {/* <button className="add-user">Добавить</button> */}
                <AddUserButton />
            </div>

            <div className="users">
                <p className="visitors">Посетители</p>
                <div className="count">
                    <span className="partner">280</span>
                    <span className="slash">/</span>
                    <span className="passerby">35</span>
                </div>
            </div>

        </header>
    )
}