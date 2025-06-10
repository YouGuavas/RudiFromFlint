import Image from 'next/image';
import Link from 'next/link';
import { cars, filters } from '../cars/cars.ts';
import Card from './Card';
import InteractiveList from './InteractiveList.tsx';
import { useState } from 'react';

export default function Carousel() {
	return (
		<div className={`flex column center`}>
			<InteractiveList categories={filters} />
			<div className={`flex row width-full left-align`}>
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
			</div>
		</div>
	);
}
