import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, InputGroup, Form } from "react-bootstrap";
import Header from "./Header";
const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <React.Fragment>
      <p>
        {" "}
        Total Amount<span className="px-2"> Rs:</span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, accumulator) => total + accumulator,
          0
        )}
      </p>
      <div className="d-flex">
        {CART?.map((cartItem, cartIndex) => (
          <div className="card p-2" key={cartIndex}>
            <div className="pic-wrapper">
              <Image
                src={cartItem.image}
                className="img-fluid ht"
                alt="Image"
                width="100"
                height="100"
              />
            </div>
            <div className="properties-list-content">
              <h6 className="page-title">{cartItem.title}</h6>
              <h6 className="font-weight-600">Rs: {cartItem.price}/-</h6>
              <p>{cartItem.description}</p>
              <div className="py-3">
                <InputGroup className="mb-3 wt170">
                  <InputGroup.Text>
                    <Button
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? {
                                ...item,
                                quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 1,
                              }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      <i className="fa fa-minus"></i>
                    </Button>
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    name="name"
                    value={cartItem.quantity}
                  />
                  <InputGroup.Text>
                    <Button
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      <i className="fa fa-plus"></i>
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
                <span> Rs. {cartItem.price * cartItem.quantity} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CartList;
