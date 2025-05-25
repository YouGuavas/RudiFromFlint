import Image from 'next/image';
import Link from 'next/link';
import ripples from '../public/logos/ripples.png';
import EmailForm from './components/EmailForm';
import fish from '../public/memes/fish_fear.png';

import type { Metadata } from 'next';
import { ProviderWrapper } from './ThemeProviderWrapper';
export const metadata: Metadata = {
	title: 'Rudi | Champion',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main center`}>
				<Image src={ripples.src} height={25} width={25} alt="Ripple logo" />
				<h1 className={`uppercase spaced style-1 thin font-large`}>
					How to be a champion.
				</h1>
				<p className={`paragraph full left`}>
					As with the concept, this is a living document. I am working on it as
					I go along. You are welcome to come back to check for updates whenever
					it pleases you.
				</p>
				<p className={`paragraph full left`}>
					Have you ever tossed a handful of pebbles into a pond or a creek, and
					watched the water ripple?
				</p>{' '}
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to throw stones.
				</h2>
				<p className={`paragraph full left`}>
					Every action we take creates a vibration around us. You know this if
					you have ever jumped into the air, and listened to the sound that your
					feet made as they returned to the Earth.
				</p>
				<div className={`flex gap-medium`}>
					<Image
						id="fish_fear"
						alt={`Hat which reads "Women want me, fish fear me."`}
						height={333}
						width={250}
						src={fish.src}
					/>
				</div>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					What is the wave.
				</h2>
				<ul className={`no-deco flex column gap-small`}>
					<li>
						Amplifying Nature - Healing old wounds. Let what would otherwise
						fester breathe instead. I believe that this sort of action - a
						healing one, done in harmony with what is - always leaves behind a
						positive ripple.
					</li>{' '}
					<li>
						Accelerating Empathy - Deep empathy - for each other, of course;
						also for all living beings, and for the planet on which we all
						reside - improves outcomes for everyone. The mathematics of this
						checks out. It will prove itself. Or you can look up mid-term and
						long-term financial outcomes in societies who historically have
						prized health and ecological harmony vs those who have prioritized
						industry.
					</li>
					<li>Lichenization - No explanation.</li>
				</ul>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to join the wave.
				</h2>{' '}
				<p>
					If you haven&apos;t already, please consider adding yourself to my
					mailing list for future updates:
				</p>
				<EmailForm />
			</main>
		</ProviderWrapper>
	);
}
