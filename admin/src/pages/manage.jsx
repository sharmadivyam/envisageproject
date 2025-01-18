import { useState } from 'react';
import './manage.css';
import Card from '../components/itemcard.jsx';
import Add from '../components/additem.jsx';
import Navbar from '../components/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Admin() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  const updateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <>
      
      <div className='card-container'>
        <Add onAddItem={addItem} />
        {items.map((item) => (
          <Card key={item.id} {...item} onSave={updateItem} />
        ))}
      </div>
    </>
  );
}

export default Admin;
