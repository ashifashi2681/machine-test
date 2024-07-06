import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Product from "../components/Product";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../app/features/productSlice";


function ProductList() {
	const [categorySelect, setCategorySelect] = useState("");
	const {products} = useSelector((state) => state.products);
	const dispatch = useDispatch()

	//api call
	useEffect(() => {
		dispatch(fetchData())
	}, []);

	//extract categories from data
	const categories = Array.from(
		new Set(products.map((product) => product.category))
	);

	const categoryOptions = categories.map((category) => ({
		value: category,
		label: category,
	}));

	//categories filtration
	const filterdCategories = categorySelect
		? products.filter(
				(product) => product.category === categorySelect.value
		  )
		: products;

	return (
		<Layout>
			<div>
				<div
					className="filter-selection"
					style={{ position: "sticky", top: "50px" }}>
					<Select
						options={categoryOptions}
						isClearable={true}
						placeholder="Select Category"
						onChange={(selectedOption) =>
							setCategorySelect(selectedOption)
						}
					/>
				</div>
				<div className="productlist-container">
					{filterdCategories.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</div>
		</Layout>
	);
}

export default ProductList;
