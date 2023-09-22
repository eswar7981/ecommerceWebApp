import React from "react";
import "./CartPage.css";
const CartPage = (props) => {
  const products = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div className="modals">
      <h1 >Cart</h1>
      {products.map((item) => (
        <div className="container">
          <div className="row">
            <div className="col">
              <img style={{height:100,width:100}}    src={item.imageUrl}></img>
              </div>
            <div className="col">
              <h3>{item.title}</h3>
            </div>
            <div className="col">
              <h3>{item.price}</h3>
            </div>
            <div className="col">
              <div className="btn-light">
              <button>delete item</button>
              </div>
              </div>
          </div>
        
        </div>
      ))}
      <div className='btn'>
        <button onClick={props.closeCart}>close</button>
        </div>
    </div>
  );
};

export default CartPage;
