import React from "react";
import { useState } from "react";
import { Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import { data } from "./OurItems";
import Link from "next/link";
import Image from "next/image";
const Addtocart = () => {
  const initialState = 0;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(initialState);

  const addToCart = (items) => {
    setCart([...cart, items]);
  };

  // Increase Quantity
  const AddItems = (items, id) => {
    if (items.id === id) {
      setQuantity(quantity + 1);
    }
    setCart({ ...cart });
  };

  // Decrease Quantity
  const DecreaseItems = (items, id) => {
    if (items.id === id) {
      setQuantity(quantity - 1);
    }
  };
  // const handleChange = (e, name, error, index) => {
  //   const marray = cart.data.map((item, i) => {
  //     if (index == i) {
  //       if (e.target.value == "") {
  //         return {
  //           ...item,
  //           [name]: "",
  //           [error]: `${name.replace("_", " ")} can not be empty`,
  //         };
  //       } else {
  //         if (e.target.value != "") {
  //           return { ...item, [name]: e.target.value, [error]: "" };
  //         } else {
  //           return {
  //             ...item,
  //             [name]: e.target.value,
  //             [error]: `${name} Invalid Input`,
  //           };
  //         }
  //       }
  //     } else {
  //       return { ...item };
  //     }
  //   });
  //   setCart({ ...cart, addItems: marray });
  // };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };
  const data = [
    {
      id: 1,
      propertiesImage: "/../public/images/tomato.jpg",
      propertiesTitle: "TOMATO",
      price: "250",
      propertiesDescrption: "Fresh Tomato",
    },
    {
      id: 2,
      propertiesImage: "/../public/images/beans.jpg",
      propertiesTitle: "Beans",
      price: "350",
      propertiesDescrption: "Fresh Beans",
    },
    {
      id: 3,
      propertiesImage: "/../public/images/ginger.jpg",
      propertiesTitle: "Ginger",
      price: "450",
      propertiesDescrption: "Fresh Ginger",
    },
  ];

  const cartItems = (
    <React.Fragment>
      <Row>
        {data.map((items) => (
          <Col xl={4} lg={4} md={6} sm={12}>
            <div className="properties-list">
              <div className="pic-wrapper">
                <Image
                  src={items.propertiesImage}
                  className="img-fluid"
                  alt="Image"
                  width="50"
                  height="50"
                />
              </div>
              <div className="properties-list-content">
                <h4 className="page-title">{items.propertiesTitle}</h4>
                <h5 className="page-title">{items.price}</h5>
                <p>{items.propertiesDescrption}</p>
                <div className="py-3">
                  <Button
                    type="submit"
                    className="text-uppercase btn btn-success"
                    onClick={() => addToCart(items)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );

  const cartItems1 = (
    <React.Fragment>
      <Row>
        {cart.map((items) => (
          <Col xl={4} lg={4} md={6} sm={12}>
            <div className="properties-list">
              <div className="pic-wrapper">
                <Image
                  src={items.propertiesImage}
                  className="img-fluid"
                  alt="Image"
                  width="50"
                  height="50"
                />
              </div>
              <div className="properties-list-content">
                <h4 className="page-title">{items.propertiesTitle}</h4>
                <h5 className="page-title">{items.price}</h5>
                <p>{items.propertiesDescrption}</p>
                <div className="py-3">
                  <div>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <Button onClick={() => AddItems(items)}>
                          <i className="fa fa-plus"></i>
                        </Button>
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Amount (to the nearest dollar)"
                        name="name"
                        value={quantity}
                        onChange={handleChange}
                      />
                      <InputGroup.Text>
                        <Button onClick={() => DecreaseItems(items)}>
                          <i className="fa fa-minus"></i>
                        </Button>
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );

  console.log(cart);
  return (
    <React.Fragment>
      <div>{cartItems}</div>
      <div>{cartItems1}</div>
    </React.Fragment>
  );
};

export default Addtocart;
