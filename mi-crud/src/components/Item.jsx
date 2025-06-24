import React from "react";

// Función que devuelve la etiqueta según el promedio
function obtenerEtiqueta(promedio) {
  const p = parseFloat(promedio);
  if (p >= 1 && p <= 3.9) return { texto: "Deficiente", clase: "badge rojo" };
  if (p >= 4 && p <= 5.5) return { texto: "Con mejora", clase: "badge amarillo" };
  if (p >= 5.6 && p <= 6.4) return { texto: "Buen trabajo", clase: "badge azul" };
  if (p >= 6.5 && p <= 7.0) return { texto: "Destacado", clase: "badge verde" };
  return { texto: "Promedio inválido", clase: "badge gris" };
}

// Componente que representa un ítem individual con opciones para editar o eliminar
function Item({ item, deleteItem, editItem }) {
  const etiqueta = obtenerEtiqueta(item.promedio);

  return (
    <div className="card">
        <h2>Evaluaciones Guardadas</h2>
      <p><strong>Alumno:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <span className={etiqueta.clase}>{etiqueta.texto}</span>
      <div className="acciones">
        <button className="btn editar" onClick={() => editItem(item)}>Editar</button>
        <button className="btn eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default Item;