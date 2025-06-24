import React, { useState, useEffect } from 'react';

// Componente de formulario para agregar o actualizar un ítem
function Form({addOrUpdateItem, itemToEdit}){
    const [nombre, setNombre] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [promedio, setPromedio] = useState('');

    // Efecto que actualiza el campo de entrada si hay un ítem para editar
    useEffect(() => {
        if (itemToEdit) {
            setNombre(itemToEdit.nombre);
            setAsignatura(itemToEdit.asignatura);
            setPromedio(itemToEdit.promedio);
        } else {
            setNombre('');
            setAsignatura('');
            setPromedio('');
        }
    }, [itemToEdit]);

    // Maneja el envío del formulario y ejecuta la función de agregar o actualizar
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !asignatura || promedio === '') return;

        addOrUpdateItem({
            nombre,
            asignatura,
            promedio
        });

        setNombre('');
        setAsignatura('');
        setPromedio('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{itemToEdit ? "Editar Evaluación": "Agregar Nuevas Evaluaciones"}</h2>
            <input 
                type="text"
                placeholder='Nombre de Alumno'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
            />

            <input 
                type="text"
                placeholder='Asignatura'
                value={asignatura}
                onChange={(e) => setAsignatura(e.target.value)} 
            />

            <input 
                type="text"
                placeholder='Promedio'
                value={promedio}
                onChange={(e) => setPromedio(e.target.value)}
                step='0.1'
                min='1'
                max='7'
            />
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
}

export default Form;

