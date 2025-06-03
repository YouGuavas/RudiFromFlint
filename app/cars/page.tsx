import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';
//import RippleGraph from '../components/RippleGraph';

import type { Metadata } from 'next';

import styles from '../page.module.css';
import { ProviderWrapper } from '../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Rudi | Cars',
	description:
		'See the cars that drive behind Rudi Aleman, Jr.! Envisioned by Patrick Other.',
};
export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main center height-full flex column`}>
				<h1 className={`style-1 uppercase thin`}>See Rudi&apos;s cars.</h1>

				<InteractiveList categories={categories} routes={routes} />

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
