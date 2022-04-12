import React from 'react'

function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
    <div className="drawer">
          <h2 className="mb-20 d-flex justify-between align-center ">Корзина<img className='remove-btn cu-p' src="img/remove.svg" alt='remove' onClick={onClose}/></h2>
          <div className="cartItemContainer">
          
          {items.map((obj)=>{return(
            <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{backgroundImage: `url(${obj.img})`}} />
            <div className="mr-20">
              <p>{obj.title}</p>
              <b>{obj.price} rub.</b>
            </div>
            <img className='remove-btn' src="img/remove.svg" alt='remove'/>
          </div>
          )
          })}

          </div>
          <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 499 руб.</b>
            </li>
            <li>
              <span>Налог: 5%</span>
              <div></div>
              <b>1488 руб.</b>
            </li>
          </ul>
          <button>Оформить заказ <img src="/img/arrow.svg" alt="" /></button>
          </div>
          
        </div>
        </div>
  )
}

export default Drawer