import Image from 'next/image';
import D3Graph from '../components/D3Graph';
import Link from 'next/link';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';
//import RippleGraph from '../components/RippleGraph';

import type { Metadata } from 'next';

import styles from '../page.module.css';
import { ProviderWrapper } from '../ThemeProviderWrapper';

const nodes = [
	{ id: 'You' },
	{ id: 'Person A' },
	{ id: 'Person B' },
	{ id: 'Person A Friends' },
	{ id: 'Person B Friends' },
	{ id: 'Relatives' },
	{ id: 'Employees' },
	{ id: 'Coworkers' },
	{ id: 'Idea A' },
	{ id: 'Idea B' },
];

export const metadata: Metadata = {
	title: 'Patripples | Visualizations',
	description:
		'See the visuals that drive the ripples behind Patripples! Envisioned by Patrick Yambrick.',
};
export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main center height-full flex column`}>
				<h1 className={`style-1 lowercase thin`}>See my thoughts.</h1>

				<InteractiveList categories={categories} routes={routes} />
				<p className={`paragraph width-full block left-align`}>
					I intend to make this interactive and clickable.
				</p>
				<p className={`paragraph width-full block left-align`}>
					For now, the image below represents how a healthy swamp, pond, or
					wetland might look. Note the relatively clean water, the flowing
					stream, and the edges, which should generally be smooth.
				</p>
				{/*<Image
					alt="A healthy pond or wetland"
					height={300}
					width={300}
					src={'wetland.src'}
				/>*/}
				<p className={`paragraph width-full block`}></p>

				{/*<RippleGraph nodes={nodes} links={links} />*/}
				{/*<D3Graph
				data={[
					//{ x: 0, y: 1 },
					{ x: 1, y: 1 },
					//{ x: 2, y: 1 },
					{ x: 1, y: 2 },
					//{ x: 0, y: 2 },
				]}
				width={50}
				height={50}
			/>*/}
			</main>
		</ProviderWrapper>
	);
}
