import '../css/calender.css';

function Calander() {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate(); // ✅ this is the key

    const monthName = now.toLocaleString("default", { month: "long" });
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let blanks = [];
    for (let i = 0; i < firstDay; i++) {
        blanks.push(<td key={"b-" + i}></td>);
    }

    let daysInMonth = [];
    for (let d = 1; d <= lastDate; d++) {

        // ✅ check if this day is today
        const isToday = d === today;

        daysInMonth.push(
            <td key={d} className={isToday ? "today" : ""}>
                {d}
            </td>
        );
    }

    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((cell, i) => {
        if (i % 7 !== 0) {
            cells.push(cell);
        } else {
            rows.push(cells);
            cells = [cell];
        }

        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    return (
        <div className="calenderContainer">
            <h2 className="cal-month-title">{monthName} {year}</h2>

            <table className="cal-table">
                <thead>
                    <tr>
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>{row}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Calander;
