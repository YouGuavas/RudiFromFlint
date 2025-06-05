import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../../../public/logos/blue_car.svg';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Rudi | Blue Car One',
	description:
		'See the cars that drive behind Rudi Aleman, Jr.! Envisioned by Patrick Other.',
};
export default function Card() {
	return (
		<>
			<h1 className={`style-1 uppercase thin`}>Blue Car One.</h1>
			<Image src={blue_car.src} height={150} width={300} alt="Car Icon" />
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
