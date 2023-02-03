import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";

const ProductList = ({ product, addtocart }) => {
  return (
    <div className="d-flex">
      {product.map((productItem, productIndex) => (
        <div className="card p-2" key={productIndex}>
          <div className="pic-wrapper">
            <Image
              src={productItem.image}
              className="img-fluid ht"
              alt="Image"
              width="100"
              height="100"
            />
          </div>
          <div className="properties-list-content">
            <h6 className="page-title">{productItem.title}</h6>
            <h6 className="font-weight-600">Rs: {productItem.price}/-</h6>
            <p>{productItem.description}</p>
            <div className="py-3">
              <Button
                type="submit"
                className="text-uppercase btn btn-success"
                onClick={() => addtocart(productItem)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
