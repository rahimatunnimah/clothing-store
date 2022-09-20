import React from "react";
import { AiFillStar } from "react-icons/ai";
import detailStyle from "../../pages/DetailProduct/DetailProduct.module.css";

function ProductRiview() {
  return (
    <>
      <div className="row">
        <h3 className="mt-3">Product review</h3>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <span className={detailStyle.topRating}>5.0</span>
                <span className="text-muted">/10</span>
                <p>
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                </p>
              </div>
              <div className="col-2 text-center text-muted">
                <AiFillStar size={20} color="#FFBA49" /> 5 <br />
                <AiFillStar size={20} color="#FFBA49" /> 4 <br />
                <AiFillStar size={20} color="#FFBA49" /> 3 <br />
                <AiFillStar size={20} color="#FFBA49" /> 2 <br />
                <AiFillStar size={20} color="#FFBA49" /> 1 <br />
              </div>
              <div className="col-4">
                <hr className={detailStyle.lineRating} />
              </div>
              <div className="col-2 text-center text-muted">
                <span>4</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRiview;
