import React from "react";
import { AiFillStar } from "react-icons/ai";
import detailStyle from "../../pages/DetailProduct/DetailProduct.module.css";
import black from "../../assets/Ellipse-black.png";
import red from "../../assets/Ellipse-red.png";
import blue from "../../assets/Ellipse-blue.png";
import green from "../../assets/Ellipse-green.png";

function OrderSection() {
  return (
    <>
      <div>
        <h5 className={detailStyle.titleDetail}>
          Nike CruzrOne (Bright Crimson)
        </h5>
        <span className="text-muted">Nike</span>
        <p className="mt-2">
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <span className="text-muted w-50 ps-1">(10)</span>
        </p>
      </div>
      <div>
        <p className="text-muted m-0">Price</p>
        <h4 className={detailStyle.price}>$ 20.0</h4>
      </div>
      <div>
        <p className="mt-4 mb-1">Color</p>
        <p>
          <img className={detailStyle.color} src={black} alt="black" />
          <img className={detailStyle.color} src={red} alt="red" />
          <img className={detailStyle.color} src={blue} alt="blue" />
          <img className={detailStyle.color} src={green} alt="green" />
        </p>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="mb-1">Size</p>
          <p>
            <button
              type="button"
              className={`btn rounded-circle ${detailStyle.btnNegative}`}
            >
              -
            </button>
            <span> 28 </span>
            <button
              type="button"
              className={`btn btn-outline-light rounded-circle ${detailStyle.btnPositive}`}
            >
              +
            </button>
          </p>
        </div>
        <div className="col-6">
          <p className="mb-1">Jumlah</p>
          <p>
            <button
              type="button"
              className={`btn rounded-circle ${detailStyle.btnNegative}`}
            >
              -
            </button>
            <span> 1 </span>
            <button
              type="button"
              className={`btn btn-outline-light rounded-circle ${detailStyle.btnPositive}`}
            >
              +
            </button>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <div className={detailStyle.btnChat}>
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill"
            >
              Chat
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className={detailStyle.btnChat}>
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill"
            >
              Add Bag
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-8">
          <div className={detailStyle.btnBuy}>
            <button type="button" className="btn btn-danger rounded-pill">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSection;
