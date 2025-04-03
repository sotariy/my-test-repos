import logo from "../assets/logo.svg"

export default function Header() {
    return (

        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
                <input type="text" placeholder="Поиск по имени" />
                <button className="add-user">Добавить</button>
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