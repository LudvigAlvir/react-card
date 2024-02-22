import "./style.css";
import { useState } from "react";
import { PanelPrimary } from "../../panels/primary";

export function CardPrimary({ title, text }) {
	const [active, setActive] = useState(0);

	const toggleFaq = (index) => {
		setActive((prevIndex) => (prevIndex === index ? 0 : index));
	};

	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{text}</p>

			<PanelPrimary
				active={active == 1}
				title="first"
				text="this is the first panel"
				fn={() => toggleFaq(1)}
			/>
			<PanelPrimary
				active={active == 2}
				title="second"
				text="this is the second panel"
				fn={() => toggleFaq(2)}
			/>
		</div>
	);
}
