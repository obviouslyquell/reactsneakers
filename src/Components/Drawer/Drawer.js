import React from 'react'
import AppContext from '../../context'
import Info from '../Info'
import axios from 'axios'

function Drawer({onClose, items = [], onRemove}) {

  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const {cartItems, setCartItems, totalPrice} = React.useContext(AppContext)

  const onClickOrder = async () =>{
    try {
    const {data} = await axios.post('https://6254b4a819bc53e23481aac4.mockapi.io/orders', {items:cartItems})
    setOrderId(data.id)
    setIsOrderComplete(true)
    setCartItems([])
    for(let i = 0;i<cartItems.length; i++){
      await axios.delete(`https://6254b4a819bc53e23481aac4.mockapi.io/cart/${i+1}`) // можно запариться и вывести cartItems[i].id, но с mockapi обьект берется без id
    }
    } catch (error) {
      alert('не удалось')
    }
  }
  return (
    <div className="overlay">
    <div className="drawer">
          <h2 className="mb-20 d-flex justify-between align-center ">Корзина<img className='remove-btn cu-p' src="img/remove.svg" alt='remove' onClick={onClose}/></h2>
          {items.length>0? (<><div className="cartItemContainer">
          
          {items.map((obj)=>(
            <div className="cartItem d-flex align-center mb-20" key={obj.id}>
            <div className="cartItemImg mr-20" style={{backgroundImage: `url(${obj.img})`}} />
            <div className="mr-20">
              <p>{obj.title}</p>
              <b>{obj.price} rub.</b>
            </div>
            <img className='remove-btn' src="img/remove.svg" alt='remove' onClick={()=>onRemove(obj.id)}/>
          </div>
          )
          )}

          </div>
          <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого</span>
              <div></div>
              <b>{totalPrice} руб.</b>
            </li>
            <li>
              <span>Налог: 5%</span>
              <div></div>
              <b>{totalPrice*0.05} руб.</b>
            </li>
          </ul>
          <button onClick={onClickOrder}>Оформить заказ <img src="/img/arrow.svg" alt="" /></button>
          </div></>) :
          (<Info 
            title={isOrderComplete? "Заказ оформлен!" : "Корзина пустая"} 
            description={isOrderComplete? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок"} 
            img={isOrderComplete? "img/done.png" : "/img/empty.png"}/>)}
        </div>
        </div>
  )
}

export default Drawer