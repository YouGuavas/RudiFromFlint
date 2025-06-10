import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';

import type { Metadata } from 'next';

import styles from '../page.module.css';

export const metadata: Metadata = {
	title: 'Rudi | Cars',
	description:
		'See the cars that drive behind Rudi Aleman, Jr.! Envisioned by Patrick Other.',
};
export default function Home() {
	return (
		<main className={`main center height-full flex column`}>
			<h1 className={`style-1 uppercase thin`}>See Rudi&apos;s cars.</h1>

			<InteractiveList categories={categories} routes={routes} />

			<p className={`paragraph width-full block`}></p>
		</main>
	);
}
