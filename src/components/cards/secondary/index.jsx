import { useState } from "react";
export function CardSecondary() {
	const [active, setActive] = useState(0);

	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{text}</p>
			{active == 1 ? (
				<>
					<p
						className="bold"
						onClick={() => setActive(0)}>
						Hide text
					</p>
					<div className="modal">dette er teksten som skal vises</div>
				</>
			) : (
				<p
					className="bold"
					onClick={() => setActive(1)}>
					Show text
				</p>
			)}
			{active == 2 ? (
				<>
					<p
						className="bold"
						onClick={() => setActive(0)}>
						Hide text
					</p>
					<div className="modal">dette er teksten som skal vises</div>
				</>
			) : (
				<p
					className="bold"
					onClick={() => setActive(2)}>
					Show text
				</p>
			)}
		</div>
	);
}
