import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

// Componente principal que gestiona el estado de la lista de ítems y la lógica CRUD
function App(){
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  // Carga los ítems guardados en localStorage al iniciar la app
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  // Guarda los ítems en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Agrega un nuevo ítem o actualiza uno existente
  const addOrUpdateItem = (newItemData) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? {...item, ...newItemData} : item));
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        { id: Date.now(), ...newItemData }
      ]);
    }
  };

  // Elimina un ítem por su ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Establece un ítem para ser editado
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="main-container">
      <h1>Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;