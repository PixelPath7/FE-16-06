import React from "react";

// Componente que representa una evaluacion individual en la lista
function Item({ item, deleteItem, editItem }) {
  // Funcion que determina la etiqueta de rendimiento segun el promedio
  const getEtiqueta = (promedio) => {
    if (promedio >= 6.5) {
      return { texto: "Destacado", estilo: { backgroundColor: "#d4edda", color: "#155724" } }; // Verde claro, texto verde oscuro
    }
    if (promedio >= 5.5) {
      return { texto: "Buen trabajo", estilo: { backgroundColor: "#007bff", color: "white" } }; // Azul
    }
    if (promedio >= 4.0) {
      return { texto: "Con mejora", estilo: { backgroundColor: "#ffc107", color: "#212529" } }; // Amarillo
    }
    return { texto: "Deficiente", estilo: { backgroundColor: "#dc3545", color: "white" } }; // Rojo
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.nombre}><strong>{item.nombre}</strong></div>
        <div style={styles.asignatura}>Asignatura: {item.asignatura}</div>
        <div style={styles.promedio}>
          Promedio: <strong>{parseFloat(item.promedio).toFixed(1)}</strong>
        </div>

        {/* Etiqueta que clasifica el desempeño con estilo dinámico */}
        {(() => {
          const etiqueta = getEtiqueta(item.promedio);
          return (
            <span style={{ ...styles.etiqueta, ...etiqueta.estilo }}>
              {etiqueta.texto}
            </span>
          );
        })()}
      </div>

      <div style={styles.botones}>
        <button onClick={() => editItem(item)} style={styles.editar}>Editar</button>
        <button onClick={() => deleteItem(item.id)} style={styles.eliminar}>Eliminar</button>
      </div>
    </div>
  );
}


// Estilos en linea para cada parte del componente
const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
  },
  nombre: {
    fontSize: "18px"
  },
  asignatura: {
    fontSize: "14px",
    color: "#555"
  },
  promedio: {
    fontSize: "14px"
  },
  etiqueta: {
    display: "inline-block",
    marginTop: "6px",
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: "#e0e0e0",
    fontSize: "12px",
    color: "#333"
  },
  botones: {
    display: "flex",
    gap: "8px"
  },
  editar: {
    backgroundColor: "#f0ad4e",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  eliminar: {
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default Item;