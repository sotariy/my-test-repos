import './Table.css';

export default function Table() {
    const data = [
        {
            id: 1,
            name: 'Зубенко Михаил Петрович',
            company: 'ООО "АСОЛЬ"',
            group: 'Партнер',
            presence: true
        },
        {
            id: 2,
            name: 'Зубенко Михаил Петрович',
            company: 'ООО "АСОЛЬ"',
            group: 'Прохожий',
            presence: false
        }
    ];

    return (
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
                {data.map((item) => (
                    <tr key={item.id} className="table-row">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td>{item.group}</td>
                        <td>
                            <div 
                                className={`presence-indicator ${item.presence ? 'present' : 'absent'}`}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
