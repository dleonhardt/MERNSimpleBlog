import React from "react";

function Header(props) {
	return (
		<header>
			<section className="jumbotron mt-3"><h1>MERN Blog</h1></section>
			{props.children}
		</header>
	);
}

export default Header;