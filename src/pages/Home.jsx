import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Product from "../components/Product";


function Home() {
	const [products, setProducts] = useState([]);

	//api call
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((data) => data.json())
			.then((result) => setProducts(result));
	}, []);




	return (
		<Layout>
			<div className="productlist-container">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</Layout>
	);
}

export default Home;
