import React from "react";

// Componente que representa un ítem individual con opciones para editar o eliminar
function Item({ item, deleteItem, editItem }) {
    return (
        <li>
            {item.value}
            <button onClick={() => editItem(item)}>Editar</button>
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;