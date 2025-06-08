// components/InteractiveList.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { cars, filters } from '../cars/cars.ts';

interface propsType {
	categories: Object;
}
interface routeType {
	name: string;
	path: string;
	tags: string[];
}

export default function InteractiveList(props: propsType) {
	const selected_cars = cars[0];
	const [currentFilter, setCurrentFilter] = useState('x');
	async function handleFilter(e: React.FormEvent, category: string) {
		setCurrentFilter(category.toLowerCase());
		return currentFilter;
	}

	return (
		<>
			<h3 className={`style-1 thin uppercase spaced`}>Filters: </h3>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{filters.map((filter) => (
					<li
						key={`${filter}`}
						className={`${
							currentFilter.toLowerCase() === filter.category.toLowerCase()
								? 'active'
								: ''
						} no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
						onClick={(e) => handleFilter(e, filter.category)}
					>
						{filter.category}
					</li>
				))}
			</ul>
		</>
	);
}
