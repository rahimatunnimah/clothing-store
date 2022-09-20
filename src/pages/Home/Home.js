import React from "react";
import homeStyle from "./Home.module.css";
import Slider from "../../components/Home/Slider";
import CategorySlider from "../../components/Home/CategorySlider";
import NewProduct from "../../components/Home/NewProduct";
import PopularProduct from "../../components/Home/PopularProduct";

const Home = () => {
  return (
    <div className={homeStyle.main}>
      <div className="container h-100">
        <div className={homeStyle.slider}>
          <Slider />
        </div>
        <div className={homeStyle.category}>
          <div>
            <h1>Category</h1>
            <p className="text-muted p-0">What are you currently looking for</p>
          </div>
          <div className={homeStyle.categoryContent}>
            <CategorySlider />
          </div>
        </div>
        <div className={homeStyle.contentTitle}>
          <div>
            <h1>New</h1>
            <p className="text-muted mb-1">{"You've never see it before!"}</p>
          </div>
          <div className={homeStyle.productList}>
            <div className="row">
              <NewProduct />
            </div>
          </div>
        </div>
        <div className={homeStyle.contentTitle}>
          <div>
            <h1 className="mt-4">Popular</h1>
            <p className="text-muted mb-1">
              Find clothes that are trending recently
            </p>
          </div>
          <div className={homeStyle.productList}>
            <div className="row">
              <PopularProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
