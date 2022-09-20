import React from "react";
import detailStyle from "./DetailProduct.module.css";
import Navigation from "../../components/DetailProduct/Navigation";
import ImageProduct from "../../components/DetailProduct/ImageProduct";
import OrderSection from "../../components/DetailProduct/OrderSection";
import ProductInformation from "../../components/DetailProduct/ProductInformation";
import ProductRiview from "../../components/DetailProduct/ProductRiview";
import PopularProduct from "../../components/Home/PopularProduct";

function DetailProduct() {
  return (
    <div className={detailStyle.main}>
      <div className="container">
        <div className={detailStyle.contenDetail}>
          <Navigation />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <ImageProduct />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <OrderSection />
            </div>
          </div>
          <ProductInformation />
          <ProductRiview />
          <hr />
        </div>
        <div className="row mt-5">
          <h2>You can also like this</h2>
          <p className="text-muted">You’ve never seen it before!</p>
          <div className=" row">
            <PopularProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
