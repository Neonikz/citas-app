import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { v4 as uuid } from 'uuid';

export const Form = ({ createDate }) => {

    //State del form
    const [ values, handleInputChange, reset] = useForm({
        pet:'',
        owner:'',
        date:'',
        hour:'',
        symptom:'',
    });

    const [error, setError] = useState( false );

    const { pet, owner, date, hour, symptom } = values;

    //Funcion para el submit
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if( !pet.trim() || !owner.trim() || !date.trim() || !hour.trim() || !symptom.trim() ){
            setError( true );
            return;
        }

        //Eliminar el mensaje previo
        setError( false );

        // Asignar un ID
        values.id = uuid();

        //Crear la cita
        createDate( values );

        //Reiniciar el form
        reset();
    }

    return (
        <>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null }

            <form onSubmit={ handleSubmit }>
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre de la mascota.."
                    onChange={ handleInputChange }
                    value={ pet }
                />
                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre del dueño.."
                    onChange={ handleInputChange }
                    value={ owner }
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={ handleInputChange }
                    value={ date }
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={ handleInputChange }
                    value={ hour }
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="symptom"
                    onChange={ handleInputChange }
                    value={ symptom }
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>
        </>
    )
}
