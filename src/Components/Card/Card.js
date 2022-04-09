import React from "react";

    function Card(props){
        return(
            <div className="card">
              <div className="favorite">
                <img src="img/heart-unliked.svg" alt="unliked"/>
              </div>
              
              <img src={props.img} width={133} height={112} alt=''/>
              <h5>{props.title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена</span>
                  <b>{props.price} rub.</b>
                </div>
                <button className="button" onClick={props.onClickPlus}>
                  <img src="img/plus.svg" width={11} height={11} alt=''></img>
                </button>
              </div>
            </div>
        )
    }

export default Card