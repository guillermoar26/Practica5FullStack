import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const Agendar = () => {
    const mutation = gql`
        mutation (
            $year: Int!,
            $month: Int!,
            $day: Int!,
            $hour: Int!,
            ){
            addSlot(
                year: $year,
                month: $month,
                day: $day,
                hour: $hour,
            ){
                available,
                day,
                dni,
                hour,
                month,
                year,
            }
        }
    `;

    const [addSlot, { data }] = useMutation(mutation);

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addSlot({
            variables: {
                year: year,
                month: month,
                day: day,
                hour: hour,
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Año:
                    <input type="number" value={year} onChange={e => setYear(parseInt(e.target.value))} />
                </label>
                <label>
                    Mes:
                    <input type="number" value={month} onChange={e => setMonth(parseInt(e.target.value))} />
                </label>
                <label>
                    Día:
                    <input type="number" value={day} onChange={e => setDay(parseInt(e.target.value))} />
                </label>
                <label>
                    Hora:
                    <input type="number" value={hour} onChange={e => setHour(parseInt(e.target.value))} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Agendar;