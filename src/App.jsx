import { useEffect, useState } from "react";
import "./App.css";
import Product from "./Product";
import Spinner from 'react-bootstrap/Spinner';
import Nav from "./Nav";



const App = () => {
  const [productsContainer, setProductsContainer] = useState([]);
  const [category, setCategory] = useState("tablets");
  const [spinner, setSpinner]=useState(false);
  function changeHandler(event) {
    setCategory(event.target.value);
  }
  //fetching the data from api
  useEffect(() => {
    setSpinner(true);
    fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
      res.json()
    ).then((products)=>{
     setProductsContainer(products.products);
     setSpinner(false)
    });
    
  }, [category]);
// console.log(productsContainer)
  return (
    <>
    <Nav/>
    <div className="text-center text-white p-3">
      <h1>Everything at one place</h1>
    </div>
    <div className="spinner">
   { spinner &&<Spinner animation="border" variant="info" />}
    </div>
      <div className="container">
        <select
          className="form-select w-50"
          aria-label="Default select example"
          onChange={changeHandler}
        >
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="furniture">furniture</option>
          <option value="groceries">groceries</option>
          <option value="home-decoration">home-decoration</option>
          <option value="kitchen-accessories">kithchen-accessories</option>
          <option value="laptops">laptops</option>
          <option value="mens-shirts">mens-shirts</option>
          <option value="mens-shoes">mens-shoes</option>
          <option value="mens-watches">mens-watches</option>
          <option value="mobile-accessories">mobile-accessories</option>
          <option value="motorcycle">motorcycle</option>
          <option value="vehicle">vehicle</option>
          <option value="skin-care">skin-care</option>
          <option value="sports-accessories">sports-accessories</option>
          <option value="sunglasses">sunglasses</option>
          <option value="tablets">tablets</option>
          <option value="womens-bags">womens-bags</option>
          <option value="women-dresses">womens-dresses</option>
          <option value="womens-jewellery">womens-jewellery</option>
          <option value="womens-shoes">womens-shoes</option>
          <option value="womens-watches">womens-watches</option>
          
        </select>
      </div>

      <div className="main-container d-flex flex-wrap">
        <Product products={productsContainer} />
      </div>
    </>
  );
};

export default App;
