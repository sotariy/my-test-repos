import './Footer.css';
import { useUsers } from './UserContext';

export default function Footer() {
    const { filterType, setFilterType } = useUsers();

    return (
        <div className="footer">
            <div className="footer-content">
                <span className="filter-label">Фильтровать по:</span>
                <div className="filter-buttons">
                    <button 
                        className={`filter-btn ${filterType === 'absent' ? 'active' : ''}`}
                        onClick={() => setFilterType('absent')}
                    >
                        Отсутствующим
                    </button>
                    <button 
                        className={`filter-btn ${filterType === 'present' ? 'active' : ''}`}
                        onClick={() => setFilterType('present')}
                    >
                        Присутствующим
                    </button>
                    <button 
                        className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                        onClick={() => setFilterType('all')}
                    >
                        Без фильтра
                    </button>
                </div>
            </div>
        </div>
    );
}
