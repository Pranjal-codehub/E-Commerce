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
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
  }}
>
  {products.map((item) => (
    <div
      key={item.id}
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        width: "200px",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
      <h4 style={{ margin: "0.5rem 0", fontSize: "1rem" }}>{item.title}</h4>
      <h5 style={{ color: "#555", marginBottom: "1rem" }}>
        Price: ${item.price}
      </h5>
      <button
        onClick={() => handleLoad(item)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

  );
}

export default Home;
