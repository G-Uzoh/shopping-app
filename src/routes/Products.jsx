import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import SingleProduct from "./SingleProduct";

const Products = () => {
  
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product); // Can be written as: const products = useSelector((state) => state.product.products);

  /* The above line is equivalent to: store.product.products
  where store is the state
  where product is the reducer
  and where products is inside the initial state of the reducer
  */

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div className="products">
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Products;