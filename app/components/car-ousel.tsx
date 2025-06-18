'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cars } from '../cars/cars.ts';
import Card from './Card';
import InteractiveList from './InteractiveList.tsx';
import { useState } from 'react';

type filterType = {
	filter: String;
};

export default function Carousel() {
	const [filter, setFilter] = useState('x');
	async function handleFilter(e: React.FormEvent, category: string) {
		setFilter(category.toLowerCase());
		return filter;
	}
	return (
		<div className={`flex column center width-full`}>
			<InteractiveList
				currentFilter={filter}
				handleFilter={(e: React.FormEvent, f: filterType) =>
					handleFilter(e, `${f}`)
				}
			/>
			<div className={`flex row gap-small width-full left-align`}>
				{cars.map((car, index) => {
					if (filter.toLowerCase() === 'x') {
						return (
							<Card
								key={index}
								make={car.make}
								model={car.model}
								imageSrc={car.src}
								year={car.year}
								mileage={car.mileage}
								category={car.category}
							/>
						);
					}
					if (car.make.toLowerCase() === filter.toLowerCase()) {
						return (
							<Card
								key={index}
								make={car.make}
								model={car.model}
								imageSrc={car.src}
								year={car.year}
								mileage={car.mileage}
								category={car.category}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}
