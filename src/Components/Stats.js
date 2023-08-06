import React from 'react'

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className='stats'>
        <p><em>Start adding items to your list 🚀</em></p>
      </footer>
    )
  }

  const packedArr = items.filter(item => item.packed === true);
  console.log(packedArr)
  const percentageValue = Math.round((packedArr.length * 100) / items.length)

  return (
    <footer className='stats'>
      <em>
        {percentageValue === 100 ? `You got everything! Ready to go 🛩️` : `💼 You have ${items.length} items in your list, and you already packed ${packedArr.length} (${percentageValue}%)`}
      </em>
    </footer>
  )
}

export default Stats
