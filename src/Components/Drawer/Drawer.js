import React from 'react'

function Drawer() {
  return (
    <div className="overlay" style={{display: 'none'}}>
    <div className="drawer">
          <h2 className="mb-20 d-flex justify-between align-center ">Корзина<img className='remove-btn cu-p' src="img/remove.svg" alt='remove'/></h2>
          <div className="cartItemContainer">
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{backgroundImage: 'url(img/green_blazer.png)'}} />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub</b>
            </div>
            <img className='remove-btn' src="img/remove.svg" alt='remove'/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div className="cartItemImg mr-20" style={{backgroundImage: 'url(img/green_blazer.png)'}} />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub</b>
            </div>
            <img className='remove-btn' src="img/remove.svg" alt='remove'/>
          </div>
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