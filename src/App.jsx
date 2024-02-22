import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardPrimary, CardSecondary } from "./components/cards";
function App() {
	return (
		<div>
			<CardPrimary
				title="Primary card"
				text="This is my primary card"
			/>
		</div>
	);
}

export default App;
