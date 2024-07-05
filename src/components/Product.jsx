import React from "react";
import "../styles/product.css";
import {useDispatch} from 'react-redux'
import {add} from '../app/features/cartSlice'

function Product({ product }) {

    const dispatch = useDispatch()



	return (
		<div className="product-container">
			<div className="product-image">
				<img src={product.image} alt="" />
			</div>
			<div className="product-body">
				<p>{product.title}</p>
				<p>Price: ${product.price}</p>
			</div>
			<div className="product-footer">
				<button onClick={()=> dispatch(add(product))}>Add to Cart</button>
			</div>
		</div>
	);
}

export default Product;
