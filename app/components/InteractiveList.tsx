// components/InteractiveList.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { filters } from '../cars/cars.ts';

export default function InteractiveList() {
	const [currentFilter, setCurrentFilter] = useState('x');
	async function handleFilter(e: React.FormEvent, category: string) {
		setCurrentFilter(category.toLowerCase());
		return currentFilter;
	}

	return (
		<>
			<h3 className={`style-1 thin uppercase spaced`}>Filter: </h3>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{filters.map((filter) => (
					<li
						key={`${filter}`}
						className={`${
							currentFilter.toLowerCase() === filter.toLowerCase()
								? 'active'
								: ''
						} no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
						onClick={(e) => handleFilter(e, filter)}
					>
						{filter}
					</li>
				))}
			</ul>
		</>
	);
}
