import React from "react";
import "./Product.css";
import { Rate, Carousel, Input, Space, Button, Radio } from "antd";
import "antd/dist/antd.css";
import bread from "./product.svg";
import "./Detail.css";

import star from "./star.svg";
export default function Product() {
  return (
    <div className=" product">
      {/* <h1>Dave's Killer Bread® Organic 21 Whole Grain Bread</h1> */}
      {/* <img src={star} alt="satr"></img> */}
      <div className="details">
        <div className=" description">
          <div class="desc_main">
            {/* <img src={bread} alt="user"></img> */}
            <h5>Description</h5>
            <p className="p_des">
              Ingredients: Water, Organic Whole Wheat Flour, Organic Cracked
              Whole Wheat, Organic Cane Sugar, Organic Grain and Seed Topping
              Mix (Organic Flax Seeds, Organic Sunflower Seeds, Organic Brown
              Sesame Seeds, Organic Triticale Flakes [Wheat], Organic Barley
              Flakes, Organic Oat Flakes, Organic Pumpkin Seeds, Organic Rye
              Flakes, Organic Black Sesame Seeds, Organic Millet, Organic Spelt
              Flakes [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan
              Wheat Flakes, Organic Quinoa, Organic Poppy Seeds), Organic Wheat
              Gluten.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <Carousel
          dots={{ clasName: "test" }}
          autoplay={false}
          // afterChange={onChange}
        >
          <div>
            <div className="content_style">
              <img src={bread} alt="Product Image" />
            </div>
          </div>
          <div>
            <h3 className="content_style">
              {" "}
              <img src={bread} alt="Product Image" />
            </h3>
          </div>
          <div>
            <h3 className="content_style">
              {" "}
              <img src={bread} alt="Product Image" />
            </h3>
          </div>
          <div>
            <h3 className="content_style">
              {" "}
              <img src={bread} alt="Product Image" />
            </h3>
          </div>
        </Carousel>
      </div> */}
    </div>
  );
}
