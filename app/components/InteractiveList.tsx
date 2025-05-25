// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../api/lib/supabase';
import Link from 'next/link';

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
			<h3 className={`style-1 thin lowercase spaced`}>Filters: </h3>
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
			<h3 className={`style-1 thin lowercase spaced`}>Thoughts: </h3>

			<ul className={`flex gap-medium no-deco pad-none width-full center`}>
				{links.map(({ name, path, tags }) =>
					tags.indexOf(filter) !== -1 ? (
						<li
							key={`${name}`}
							className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2`}
						>
							<Link
								className={`no-deco lowercase style-1 thin spaced color-2 rounded darken px-2 py-2 bordered`}
								scroll={false}
								href={`${path}`}
								id={name.toLowerCase()}
							>
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
