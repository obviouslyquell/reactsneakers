import React from "react"
import axios from "axios";
import Header from "./Components/Header/Header";
import Drawer from "./Components/Drawer/Drawer";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import AppContext from "./context";


function App() {
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [opened, setOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(()=>{
    (async function fetchData(){
    const itemsResponse = await axios.get('https://6254b4a819bc53e23481aac4.mockapi.io/items')
    const cartResponse = await axios.get('https://6254b4a819bc53e23481aac4.mockapi.io/cart')
    const favoritesResponse = await axios.get('https://6254b4a819bc53e23481aac4.mockapi.io/favorites')
    setIsLoading(false)
    setFavorites(favoritesResponse.data);
    setCartItems(cartResponse.data);
    setItems(itemsResponse.data);
    })()    // IIFE вроде, да? 
  }, [])

  const onAddToCart = async (obj) =>{
    try {
      const findItem = cartItems.find((item)=>Number(item.parentId)===Number(obj.id));
      if(findItem){
        setCartItems(prev=>prev.filter(item=>Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://6254b4a819bc53e23481aac4.mockapi.io/cart/${findItem.id}`);
      }else{
        setCartItems(prev=>[...prev,obj]);
        const { data } = await axios.post('https://6254b4a819bc53e23481aac4.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
      
    } catch (error) {
      alert(error)
    }
  }
  const onRemoveItem = (id) =>{
    try {
      axios.delete(`https://6254b4a819bc53e23481aac4.mockapi.io/cart/${id}`)
      setCartItems(prev=>prev.filter(item=>Number(item.id)!==Number(id)))
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  }
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  const isItemFavorite = (id) =>{
    return favorites.some((obj) => Number(obj.id) === Number(id));
  }
  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  } 
  const onAddToFavorite = async (obj) => {
    try {
      if(favorites.find((favObj)=>favObj.id===obj.id)){
        setFavorites(prev=>prev.filter(item=>item.id!==obj.id))
        axios.delete(`https://6254b4a819bc53e23481aac4.mockapi.io/favorites/${obj.id}`);
        
      }else{
        const { data } = await axios.post('https://6254b4a819bc53e23481aac4.mockapi.io/favorites', obj)
        setFavorites(prev=>[...prev,data]) 
      }
    } catch (error) {
      alert('error')
    }
    
  }
  let totalPrice = cartItems.reduce((acc , i)=>acc+=i.price, 0);
  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      onAddToFavorite,
      onAddToCart,
      setOpened,
      setCartItems,
      isItemAdded,
      isItemFavorite,
      totalPrice
    }}>
      <div className="wrapper clear">

{opened ? <Drawer onClose={()=>setOpened(false)} items={cartItems} onRemove={onRemoveItem}/> : null}


<Header onClickCart={()=>setOpened(true)}/>

<Routes>
  <Route path="/" element={<Home items={items} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} cartItems={cartItems} isLoading={isLoading}/>}></Route>
  <Route path='/favorites' element={<Favorites />}/>
  <Route path='/orders' element={<Orders />}/>
</Routes>
</div>
    </AppContext.Provider>
    
  );
}

export default App;


