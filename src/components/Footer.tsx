import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <span className="filter-label">Фильтровать по:</span>
            <div className="filter-buttons">
                <button className="filter-btn">Отсутствующим</button>
                <button className="filter-btn">Присутствующим</button>
                <button className="filter-btn active">Без фильтра</button>
            </div>
        </div>
    );
}
