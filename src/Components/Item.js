import React from 'react'

const Item = ({ item, onDeleteItems, onPackedItems }) => {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => {
        onPackedItems(item.id)
      }} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  )
}

export default Item
