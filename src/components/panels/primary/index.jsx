export function PanelPrimary({ active, title, text, fn, closeFn }) {
	console.log(active, title, text, fn);
	return (
		<>
			{active ? (
				<>
					<p
						className="bold"
						onClick={() => fn()}>
						{title}
					</p>
					<div className="modal">{text}</div>
				</>
			) : (
				<p
					className="bold"
					onClick={() => fn()}>
					{title}
				</p>
			)}
		</>
	);
}
