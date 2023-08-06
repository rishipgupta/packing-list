import React from 'react'
import Item from './Item';
import { useState } from 'react';

const TravelList = ({ items, onDeleteItems, onPackedItems, clearListItems }) => {
  const [sortBy, setSortBy] = useState("input")
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packaged") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }




  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onPackedItems={onPackedItems} />)}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packaged">Sort by packaged status</option>
        </select>
        <button onClick={clearListItems}>Clear List</button>
      </div>
    </div>

  )
}

export default TravelList
