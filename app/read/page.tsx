import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';

export const metadata: Metadata = {
	title: 'Patripples | Read',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
};
export default function Home() {
	return (
		<main className={`main center height-full`}>
			<h1 className={`style-1 thin lowercase`}>read my mind.</h1>
			<InteractiveList categories={categories} routes={routes} />
		</main>
	);
}
