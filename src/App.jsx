import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
