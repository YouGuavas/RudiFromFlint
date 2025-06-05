import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../../public/logos/blue_car.svg';
import Card from './Card';

export default function Carousel() {
	return (
		<>
			<Card image={blue_car} />
		</>
	);
}
