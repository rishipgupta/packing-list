import { useState } from 'react';
import Logo from './Components/Logo';
import Form from './Components/Form';
import TravelList from './Components/TravelList';
import Stats from './Components/Stats';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter(item => item.id !== id));
  }

  const handlePackedItems = (id) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <TravelList items={items} onDeleteItems={handleDeleteItems} onPackedItems={handlePackedItems} />
      <Stats />
    </div>
  );
}

export default App;
