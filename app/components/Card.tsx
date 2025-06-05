import Image from 'next/image';
import Link from 'next/link';

type propsType = {
	model: string;
	category: string;
	imageSrc: string;

	year: number;
	make: string;
	mileage: number;
};

export default function Card(props: propsType) {
	return (
		<div className={`flex column center`}>
			<h1 className={`style-1 uppercase thin`}>
				{`${props.make} ${props.model}`}.
			</h1>
			<div className={`image-container`}>
				<Image src={props.imageSrc} fill alt="Car Icon" />
			</div>
			<p className={`paragraph width-full block left-align`}>
				{`${props.make} ${props.model} is a ${props.category}.`}
			</p>
			<ul className={`flex column gap-medium left-align width-full no-deco`}>
				<li>
					<strong>Make:</strong> {props.make}
				</li>
				<li>
					<strong>Model:</strong> {props.model}
				</li>
				<li>
					<strong>Mileage:</strong> {props.mileage}
				</li>
				<li>
					<strong>Year:</strong> {props.year}
				</li>
			</ul>
		</div>
	);
}
