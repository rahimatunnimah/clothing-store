import React from "react";
import homeStyle from "../../../pages/Home/Home.module.css";
import Rating from "./Rating";
import imgProduct from "../../../assets/product.png";

function Card() {
  return (
    <div className="col-xl-2 mt-xl-4 col-md-3 mt-md-3">
      <div className={`card h-100 ${homeStyle.cardItem}`} role="presentation">
        <img src={imgProduct} alt="product" />
        <div className="card-body">
          <h5 className="card-title text-start">Men's formal suit - Black</h5>
          <p className="card-text mb-1">{`$ 40.0`}</p>
          <p className="text-muted mb-1">Zalora Cloth</p>
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default Card;
