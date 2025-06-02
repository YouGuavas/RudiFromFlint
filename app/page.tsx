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
					You already are a champion, if you ask me. Everybody knows that a
					champion deserves a chariot fit for a king.
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					About Rudi.
				</h2>
				<p className={`paragraph full left`}>
					Rudi is a walking smile - a champion of the sun - and wants you to be,
					too. When you see Rudi smiling at you, you feel the warmth of a sunny
					day shining onto you, and you&apos;ll want to share that warmth with
					all around. What better way to get the word out than to ride in style?
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to smile like a champion.
				</h2>
				<p className={`paragraph full left`}>
					You can carry some of Rudi&apos;s sunlight with you by envisioning
					yourself beaming bright as you step up out of your chariot, ready to
					be champion.
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to feel like a king.
				</h2>
				<p className={`paragraph full left`}>
					Check Rudi out at Champion Auto Sales in , where all credit is
					approved and everyone can find financing.
				</p>
				<ul className={`no-deco flex column gap-small`}>
					<li></li>{' '}
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
