import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../../public/logos/blue_car.svg';
import red_car from '../../public/logos/red_car.svg';
import green_car from '../../public/logos/green_car.svg';
import black_car from '../../public/logos/black_car.svg';

import Card from './Card';

export default function Carousel() {
	return (
		<div className={`flex row width-full center`}>
			<Card
				imageSrc={blue_car.src}
				model={`Car`}
				make={`Blue`}
				category={`dignified ride`}
				year={1994}
				mileage={125000}
			/>
			<Card
				imageSrc={red_car.src}
				model={`Car`}
				make={`Red`}
				category={`dignified ride`}
				year={1998}
				mileage={160000}
			/>
			<Card
				imageSrc={green_car.src}
				model={`Car`}
				make={`Green`}
				category={`dignified ride`}
				year={2006}
				mileage={150000}
			/>
			<Card
				imageSrc={black_car.src}
				model={`Car`}
				make={`Black`}
				category={`dignified ride`}
				year={2002}
				mileage={170000}
			/>
		</div>
	);
}
