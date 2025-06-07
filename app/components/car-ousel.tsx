import Image from 'next/image';
import Link from 'next/link';
import cars from '../cars/cars.ts';

import Card from './Card';

export default function Carousel() {
	return (
		<div className={`flex row width-full center`}>
			{cars.map((car) => {
				return (
					<Card
						imageSrc={car.src}
						model={car.model}
						make={car.make}
						category={car.category}
						year={car.year}
						mileage={car.mileage}
					/>
				);
			})}
			{/*
			
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
			/>*/}
		</div>
	);
}
