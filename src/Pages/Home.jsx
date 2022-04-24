import React from "react";
import Card from "../Components/Card/Card";

function Home({items,
    searchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite,
    isLoading
  }){

      //const { isItemAdded, isItemFavorite } = React.useContext(AppContext)
      const renderItems = () =>{
        const filtredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return(
          (isLoading ? [...Array(8)] : filtredItems).map((i,index)=>
          <Card 
          {...i}
          key={index}
          //added={isItemAdded(i && i.id)}
          //favorited={isItemFavorite(i && i.id)}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          />
          )
        )
      }
    return(
        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="search-block">
              <img src="img/search.svg" alt="search" />
              <input placeholder="Поиск" onChange={onChangeSearchInput}></input>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {renderItems()}
          </div>

          
        </div>
    )
}

export default Home