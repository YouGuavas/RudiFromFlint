// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import blue_car from '../../public/logos/blue_car.svg';

interface propsType {
	categories: string[];
	routes: routeType[];
}
interface routeType {
	name: string;
	path: string;
	tags: string[];
}

export default function InteractiveList(props: propsType) {
	const [filter, setFilter] = useState('x');
	const [links, setLinks] = useState(props.routes);
	async function handleFilter(e: React.FormEvent, category: string) {
		setFilter(category.toLowerCase());
		return filter;
	}

	return (
		<>
			<h3 className={`style-1 thin uppercase spaced`}>Filters: </h3>
			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{props.categories.map((category) => (
					<li
						key={`${category}`}
						className={`${
							filter.toLowerCase() === category.toLowerCase() ? 'active' : ''
						} no-deco lowercase style-1 spaced color-2 rounded darken px-1 py-1 pointer`}
						onClick={(e) => handleFilter(e, category)}
					>
						{category}
					</li>
				))}
			</ul>
			<h3 className={`style-1 thin uppercase spaced`}>Reliable Used Cars: </h3>

			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{links.map(({ name, path, tags }) =>
					tags.indexOf(filter.toLowerCase()) !== -1 ? (
						<li
							key={`${name}`}
							className={`no-deco uppercase style-1 thin spaced color-2 rounded darken px-2 py-2`}
						>
							<Link
								className={`no-deco style-1 thin spaced color-2 rounded darken px-2 py-2 bordered flex column center`}
								scroll={false}
								href={`${path}`}
								id={name.toLowerCase()}
							>
								<Image
									src={blue_car.src}
									height={50}
									width={50}
									alt="Car Icon"
								/>

								{`${name}.`}
							</Link>
						</li>
					) : (
						<></>
					)
				)}
			</ul>
		</>
	);
}
