import Image from 'next/image';
import Link from 'next/link';

export default function Card(image: any) {
	return (
		<>
			<h1 className={`style-1 uppercase thin`}>Blue Car One.</h1>
			<Image src={image.src} height={150} width={300} alt="Car Icon" />
			<p className={`paragraph width-full block left-align`}>
				Blue Car One is a dignified ride.
			</p>
			<ul className={`flex column gap-medium left-align width-full no-deco`}>
				<li>
					<strong>Make:</strong> Blue
				</li>
				<li>
					<strong>Model:</strong> Car
				</li>
				<li>
					<strong>Mileage:</strong> One
				</li>
				<li>
					<strong>Year:</strong> One
				</li>
			</ul>
		</>
	);
}
