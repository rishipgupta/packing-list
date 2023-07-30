import React from 'react'
import Item from './Item';

const TravelList = () => {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ];

  return (

    <div className='list'>
      <ul>
        {initialItems.map((item) => <Item item={item} key={item.id} />)}
      </ul>
    </div>

  )
}

export default TravelList
