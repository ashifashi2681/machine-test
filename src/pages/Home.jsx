import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/productSlice";

function Home() {
	const { products, searchItems } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	//api call
	useEffect(() => {
		dispatch(fetchData());
	}, []);

	return (
		<Layout>
			<div className="productlist-container">
				{searchItems.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Layout>
	);
}

export default Home;
