'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cars } from '../cars/cars.ts';
import Card from './Card';
import InteractiveList from './InteractiveList.tsx';
import { useState } from 'react';

export default function Carousel() {
	const [filter, setFilter] = useState('green');
	return (
		<div className={`flex column center`}>
			<InteractiveList />
			<div className={`flex row width-full left-align`}>
				{Object.keys(cars).map((make, index) => {
					if (make.toLowerCase === filter.toLowerCase) {
						return make;
					}
				})}
			</div>
		</div>
	);
}
