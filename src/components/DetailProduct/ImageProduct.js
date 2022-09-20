import React from "react";
import detailStyle from "../../pages/DetailProduct/DetailProduct.module.css";
import imgDetailOne from "../../assets/shoes-1.png";
import imgDetailTwo from "../../assets/shoes-2.png";
import imgDetailThree from "../../assets/shoes-3.png";
import imgDetailFour from "../../assets/shoes-4.png";

function ImageProduct() {
  return (
    <>
      <div className="col-6 mb-4">
        <div className={detailStyle.imgDetail}>
          <img src={imgDetailOne} alt="detail-product" />
        </div>
      </div>
      <div className="col-6">
        <div className={detailStyle.imgDetail}>
          <img src={imgDetailTwo} alt="detail-product" />
        </div>
      </div>
      <div className="col-6">
        <div className={detailStyle.imgDetail}>
          <img src={imgDetailThree} alt="detail-product" />
        </div>
      </div>
      <div className="col-6">
        <div className={detailStyle.imgDetail}>
          <img src={imgDetailFour} alt="detail-product" />
        </div>
      </div>
    </>
  );
}

export default ImageProduct;
