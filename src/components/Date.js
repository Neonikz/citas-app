import React from 'react'

export const Date = ({ date, deleteDate }) => (
    <div className="cita">
        <p>Mascota: <span>{ date.pet }</span> </p>
        <p>Dueño: <span>{ date.owner }</span> </p>
        <p>Fecha: <span>{ date.date }</span> </p>
        <p>Hora: <span>{ date.hour }</span> </p>
        <p>Sintomas: <span>{ date.symptom }</span> </p>

        <button
            type="button"
            className="button eliminar u-full-width"
            onClick={ () => deleteDate( date.id ) }
        >
            Eliminar &times;
        </button>
    </div>
);
