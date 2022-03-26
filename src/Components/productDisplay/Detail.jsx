import { Rate, Carousel, Input, Space, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./Detail.css";
import bread from "./product.svg";
const { Search } = Input;
export default function Detail() {
  const [value, setValue] = useState(1);
  const [qunatity, setQunatity] = useState(1);

  // function onChange(a, b, c) {
  //   console.log(a, b, c);
  // }
  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const increment = () => {
    setQunatity((val) => val + 1);
  };

  const decrement = () => {
    if (qunatity > 1) {
      setQunatity((val) => val - 1);
    }
  };
  return (
    <div>
      <h1 className=" product_heading">
        Dave's Killer Bread® Organic 21 Whole Grain Bread
      </h1>

      <div className="rating">
        <Rate allowHalf disabled defaultValue={3.5} />
        <span className="text">5 reviews</span>
      </div>
      <div className="radi">
        <div style={{ width: "40%" }}>
          <img src={bread} alt="bread"></img>
        </div>
        {/* <Carousel
          dots={{ clasName: "test" }}
          autoplay={false}
          afterChange={onChange}
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
        </Carousel> */}
        <div className="ts">
          <section className="ss">
            <Radio.Group onChange={onChangeRadio} value={value}>
              <Space direction="vertical">
                <Radio value={1}>
                  <div>
                    <h3>$5.99</h3>
                    <p>Shipping cost: $5.00</p>
                  </div>
                </Radio>
                <Radio value={2}>
                  <div>
                    <h3>$5.99</h3>
                    <p>Shipping cost: $5.00</p>
                  </div>
                </Radio>
                <Radio value={3}>
                  <div>
                    <h3>$5.99</h3>
                    <p>Shipping cost: $5.00</p>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
            <Button type="primary">See more sellers</Button>
          </section>
          <section>
            <label>
              Seller:
              <a href="https://www.figma.com/file/W4JF2SLuwjjEx5KyLDgBHq/Sample-Designs?node-id=2%3A2">
                Seller name
              </a>
            </label>
            <p>Brand: Dave Killer's Breads</p>
            <Rate allowHalf disabled defaultValue={3.5} />

            <label>Available in</label>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">300 gms</Radio.Button>
              <Radio.Button value="b">500 Kg</Radio.Button>
              <Radio.Button value="c">700 kg</Radio.Button>
            </Radio.Group>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Quantity</p>
              <div className="quantity-input">
                <button
                  className="quantity-input__modifier quantity-input__modifier--left"
                  onClick={decrement}
                >
                  &mdash;
                </button>
                <input
                  className="quantity-input__screen"
                  type="text"
                  value={qunatity}
                  readonly
                />
                <button
                  className="quantity-input__modifier quantity-input__modifier--right"
                  onClick={increment}
                >
                  &#xff0b;
                </button>
              </div>
              <div>
                <label>Check availability </label>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={() => {}}
                />
              </div>
            </div>

            <div className="btn-sec">
              <Button type="default">ADD TO CART</Button>
              <Button type="primary">BUY Now</Button>
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
}
