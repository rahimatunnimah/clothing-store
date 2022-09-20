import React from "react";
import detailStyle from "../../pages/DetailProduct/DetailProduct.module.css";

function Navigation() {
  return (
    <div className={detailStyle.navigation}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active text-mute" aria-current="page">
            Category
          </li>
          <li className="breadcrumb-item active text-mute" aria-current="page">
            Shoes
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navigation;
