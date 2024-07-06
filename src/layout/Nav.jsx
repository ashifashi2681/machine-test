import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import { useSelector } from "react-redux";

function Nav() {
	const [value, setValue] = useState('')
    const cart = useSelector((state)=> state.cart)

	const handleChange = (e) => {
		setValue(e.target.value)
		
	}
	

	return (
		<div className="nav-container">
			<div className="logo">Brand</div>
			<div className="menu">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/products"}>Products</NavLink>
				<NavLink to={"/cart"}>Cart</NavLink>
				<p className="cart">{cart.length}</p>
			</div>
			<div className="search">
				<input type="text" placeholder="search..." value={value} onChange={handleChange}/>
			</div>
		</div>
	);
}

export default Nav;
