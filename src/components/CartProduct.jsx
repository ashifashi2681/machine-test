import React from 'react'
import {useDispatch} from 'react-redux'
import {remove} from '../app/features/cartSlice'

function CartProduct({product}) {


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
				<button onClick={() => dispatch(remove(product.id))}>
					Remove
				</button>
			</div>
		</div>
  );
}

export default CartProduct


/* onClick={() => dispatch(add(product))} */