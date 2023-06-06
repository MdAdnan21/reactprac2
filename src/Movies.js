import React from "react";
  
function Movie(props) {
    return (
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title" > {props.sname}</h3>
            <a href={props.links}  > </a>
              <button>watch now</button>
          </div>
        </div>
      </div>
    )
  }
  export default Movie;