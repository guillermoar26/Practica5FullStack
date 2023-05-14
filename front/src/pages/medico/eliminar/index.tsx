import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const Eliminar = () => {
    // use mutation to delete a slot
    const mutation = gql`
        mutation (
            $year: Int!,
            $month: Int!,
            $day: Int!,
            $hour: Int!,
            ){
            deleteSlot(
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

    const [deleteSlot, { data }] = useMutation(mutation);

    // state variables
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    
    // handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        deleteSlot({
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
                <input type="submit" value="Eliminar" />
            </form>
        </div>
    )
}

export default Eliminar;
