import React, { useState } from "react";
import CartList from "./CartList";
import Header from "./Header";
import ProductList from "./ProductList";

const OurItems = () => {
  const [cart, setCart] = useState([]);

  // const addtocart = (data) => {
  //   setCart([...cart, data]);
  // };
  const addtocart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const [product, setProduct] = useState([
    {
      image: "/../public/images/tomato.jpg",
      title: "TOMATO",
      price: "250",
      descrption: "Fresh Tomato",
    },
    {
      image: "/../public/images/beans.jpg",
      title: "Beans",
      price: "350",
      descrption: "Fresh Beans",
    },
    {
      image: "/../public/images/ginger.jpg",
      title: "Ginger",
      price: "450",
      descrption: "Fresh Ginger",
    },
  ]);
  console.log(cart);
  return (
    <React.Fragment>
      <Header count={cart.length}></Header>

      <ProductList product={product} addtocart={addtocart}></ProductList>
      <h5 className="mt-3">Our Cart Items</h5>
      <CartList cart={cart}></CartList>
    </React.Fragment>
  );
};

export default OurItems;
