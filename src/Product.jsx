import React from "react";

export default function SmartPhones({ products }) {
  console.log(products)
  const showproducts = products.map((product) => {
    let { id, brand, title, thumbnail, price } = product;
    return (
      <div className="sub-container text-center bg-white" key={id}>
        <img className="image" src={thumbnail} alt="mobile"></img>
        <div id="div">
          <h1 className="text-info">Brand: {brand}</h1>
          <h2 className="text-secondary">Title: {title}</h2>
          <b className="text-success">Price:$ {price}</b>
        </div>
        <button  className="w-50 btn btn-outline-dark m-3">Add To Cart</button>
      </div>
    );
  });
  return showproducts;
}
