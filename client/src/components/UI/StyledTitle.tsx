export function StyledTitle({ mainText, highlightedText }) {
	return (
		<h1 className='font-thin text-pink-700 text-5xl'>
			{mainText}
			<br />
			<span className='font-normal'>{highlightedText}</span>
		</h1>
	);
}
