import React from 'react'
import AppContext from '../context'

function Info({ img, title, description}) {
    const { setOpened } = React.useContext(AppContext)
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img src={img} alt="Empty" className="mb-20" width="120px" height="120px"/>
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button onClick={()=> setOpened(false)} className="greenButton">Вернуться назад</button>
    </div>
  )
}

export default Info