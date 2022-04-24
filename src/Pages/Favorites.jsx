import React from "react";
import Card from "../Components/Card/Card";
import AppContext from "../context";

function Favorites(){
  const { favorites, onAddToFavorite } = React.useContext(AppContext)

    return(
        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Мои закладки</h1>
          </div>
          
          <div className="d-flex flex-wrap">
            {
              favorites.map((i,index)=>
                <Card 
                {...i}
                key={`${index}_${i.title}`}
                favorited={true}
                onFavorite={(obj) => onAddToFavorite(obj)}
               //onPlus={(obj) => onAddToCart(obj)}
                />
                
              )
            }
          </div>

          
        </div>
    )
}

export default Favorites