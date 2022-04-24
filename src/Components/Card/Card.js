import React, {useState} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

    function Card(props){
      const {id, onPlus, onFavorite, title, img, price, favorited = false, loading = false} = props;
      const [isFavorite, setIsFavorite] = useState(favorited)
      const { isItemAdded } = React.useContext(AppContext)

      const onClickPlus = () =>{
        onPlus({id, parentId:id, price, img, title})
      }
      
      const onClickFavorite = () =>{
        onFavorite({price, img, title, id, parentId:id})
        setIsFavorite(!isFavorite)
      }
        return(
            <div className="card">
              {loading? 
    <ContentLoader 
    speed={2}
    width={150}
    height={232}
    viewBox="0 0 150 232"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="120" /> 
    <rect x="0" y="135" rx="8" ry="8" width="150" height="15" /> 
    <rect x="0" y="160" rx="9" ry="9" width="90" height="15" /> 
    <rect x="0" y="200" rx="10" ry="10" width="120" height="30" />
  </ContentLoader>: <>
  <div className="favorite" onClick={onClickFavorite}>
              {onFavorite && (
                <img src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="unliked"/>
              )}
              </div>
              <img src={img} width={133} height={112} alt=''/>
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена</span>
                  <b>{price} rub.</b>
                </div>
                <button className="button" onClick={onClickPlus}>
                {onPlus && (
                  <img src={isItemAdded(id)?"img/btn-checked.svg":"img/btn-plus.svg"}  alt=''/>
                )}
                </button>
              </div>
              </>
              }
              
            </div>
        )
    }

export default Card