import React from 'react'
import Item from './Item';

const TravelList = ({ items, onDeleteItems, onPackedItems }) => {


  return (

    <div className='list'>
      <ul>
        {items.map((item) => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onPackedItems={onPackedItems} />)}
      </ul>
    </div>

  )
}

export default TravelList
