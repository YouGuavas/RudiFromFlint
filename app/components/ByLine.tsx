type propsType = {
	date: String;
};
export default function ByLine(props: propsType) {
	return (
		<div className={`left width-full left-align`}>
			<p className={`style-1 lowercase left-align`}>Published: {props.date}</p>
		</div>
	);
}
