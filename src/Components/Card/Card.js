import React, {useState} from "react";

    function Card(props){
      const {onPlus,onFavorite, title, img, price} = props
      const [isAdded, setIsAdded] = useState(false);
      const [isFavorite, setIsFavorite] = useState(false)
      

      const onClickPlus = () =>{
        onPlus({price, img, title})
        setIsAdded(!isAdded)
      }
      
      const onClickFavorite = () =>{
        onFavorite({price, img, title})
        setIsFavorite(!isFavorite)
      }
        return(
            <div className="card">
              <div className="favorite" onClick={onClickFavorite}>
                <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="unliked"/>
              </div>
              
              <img src={img} width={133} height={112} alt=''/>
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена</span>
                  <b>{price} rub.</b>
                </div>
                <button className="button" onClick={onClickPlus}>
                  <img src={isAdded?"img/btn-checked.svg":"img/btn-plus.svg"}  alt=''></img>
                </button>
              </div>
            </div>
        )
    }

export default Card