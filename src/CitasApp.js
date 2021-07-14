import React, { useState, useEffect } from 'react';
import { Date } from './components/Date';
import { Form } from './components/Form';

export const CitasApp = () => {

    //Extraer citas del localStorage
    let initialDates = JSON.parse(localStorage.getItem('dates')) || [];

    //Arreglo de citas
    const [ dates, setDates ] = useState( initialDates );

    //Almacenar en el localStorage
    useEffect(() => {
        let initialDates = JSON.parse(localStorage.getItem('dates')) || [];
        if( initialDates ){
            localStorage.setItem('dates', JSON.stringify(dates));
        }else{
            localStorage.setItem('dates', JSON.stringify([]));
        }
    }, [ dates ]);

    //Leer las citas actuales y agrege la nueva
    const createDate = date => {
        setDates([ ...dates, date ]);
    }

    //Eliminar cita por su id
    const deleteDate = id => {
        const newDates = dates.filter( date => date.id !== id );
        setDates( newDates );
    }
    //Titulo dependiendo de si hay o no citas
    const tittle = dates.length === 0 ? 'No hay citas' : 'Administra tus citas';
    return (
        <>
            <h1>Administrador de pacientes</h1>   

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form createDate={ createDate }/>
                    </div>
                    <div className="one-half column">
                        <h2>{tittle}</h2>

                        { dates.map( date => (
                            <Date
                                key={ date.id }
                                date={ date }
                                deleteDate={ deleteDate }
                            />
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}
