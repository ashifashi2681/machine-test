import React from "react";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

function Cart() {

  const cart = useSelector((state)=> state.cart)

  let sum = 0

  cart.forEach((item) => {
    sum +=item.price

    return sum
  });

	return (
		<Layout>
			<div>
        <h3>Total Price: {sum.toFixed(2)} </h3>
				<div className="productlist-container">
					{cart.map((product) => (
						<CartProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</Layout>
	);
}

export default Cart;
