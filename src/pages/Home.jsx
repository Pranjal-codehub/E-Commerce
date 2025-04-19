import React, { useEffect, useState } from "react";
import { add } from "../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux"; //which action to be dispatch
import { fetchProducts, STATUSES } from "../Redux/ProductSlice";

function Home() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");  //for normal fetching from api
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProduct();

    dispatch(fetchProducts(products));
  }, []);
  const handleLoad = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((item) => (
        <div key={item.id}>
          <h4> {item.title}</h4>
          <h5>Price: {item.price}</h5>
          <img
            src={item.image}
            alt="img"
            style={{ width: "100px", height: "100px" }}
          />
          <button onClick={handleLoad(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
