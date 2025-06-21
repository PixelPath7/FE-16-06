import React, { useState, useEffect } from 'react';

// Componente de formulario para agregar o actualizar un ítem
function Form({addOrUpdateItem, itemToEdit}){
    const [inputValue, setInputValue] = useState('');

    // Efecto que actualiza el campo de entrada si hay un ítem para editar
    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue('');
        }
    }, [itemToEdit]);

    // Maneja el envío del formulario y ejecuta la función de agregar o actualizar
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()){
            addOrUpdateItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
}

export default Form;

