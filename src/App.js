import React from "react"
import axios from "axios";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";
import Card from "./Components/Card/Card";


function App() {

  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [opened, setOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')


  React.useEffect(()=>{
    axios.get('https://6254b4a819bc53e23481aac4.mockapi.io/items').then((res)=>{
      setItems(res.data)
    });
    axios.get('https://6254b4a819bc53e23481aac4.mockapi.io/cart').then((res)=>{
      setCartItems(res.data);
    });
  }, [])

  const onAddToCart = (obj) =>{
    axios.post('https://6254b4a819bc53e23481aac4.mockapi.io/cart', obj)
    setCartItems(prev=>[...prev,obj]) 
  }
  const onRemoveItem = (id) =>{
    console.log(id)
    setCartItems(prev=>prev.filter(item=>item.id!==id))
    axios.delete(`https://6254b4a819bc53e23481aac4.mockapi.io/cart/${id}`)
    
  }
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
    console.log(searchValue)
  } 
  const onAddToFavorite = (obj) => {
    axios.post('https://6254b4a819bc53e23481aac4.mockapi.io/favorites', obj)
    setFavorites(prev=>[...prev,obj]) 
  }
  

  return (
    <div className="wrapper clear">

        {opened ? <Drawer onClose={()=>setOpened(false)} items={cartItems} onRemove={onRemoveItem}/> : null}
      
        
       <Header onClickCart={()=>setOpened(true)}/>

        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="search-block">
              <img src="img/search.svg" alt="search" />
              <input placeholder="Поиск" onChange={onChangeSearchInput}></input>
            </div>
          </div>
          
          <div className="d-flex flex-wrap">
            {
              items.filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase())).map(i=>
                <Card 
                title={i.title} 
                price={i.price} 
                img={i.url}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                />
                
              )
            }
          </div>

          
        </div>
    </div>
  );
}

export default App;


