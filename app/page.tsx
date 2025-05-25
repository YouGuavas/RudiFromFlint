import Image from 'next/image';
import Link from 'next/link';
import ripples from '../public/logos/ripples.png';
import EmailForm from './components/EmailForm';
import fish from '../public/memes/fish_fear.png';

import type { Metadata } from 'next';
import { ProviderWrapper, SpaceProviderWrapper } from './ThemeProviderWrapper';
export const metadata: Metadata = {
	title: 'Patripples | Home',
	description: 'Patripples: ripples, mathematics, and more! Coming soon!',
	icons: {
		icon: '/favicon.ico',
	},
};
export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main left`}>
				<Image src={ripples.src} height={25} width={25} alt="Ripple logo" />
				<p className={`paragraph full left`}>
					Update 05/19/2025: Two weeks ago, I was assaulted and illegally
					evicted by people who I thought were close to me. I took a hiatus
					during that period to focus on survival, and will resume posting as I
					am able.
				</p>
				<h1 className={`lowercase spaced style-1 thin`}>How to patripple.</h1>
				<p className={`paragraph full left`}>
					As with the concept, this is a living document. I am working on it as
					I go along. You are welcome to come back to check for updates whenever
					it pleases you.
				</p>
				<p className={`paragraph full left`}>
					Have you ever tossed a handful of pebbles into a pond or a creek, and
					watched the water ripple?
				</p>{' '}
				<p className={`paragraph full left`}>
					If you have, you have changed the course of history - etched your
					fingerprint onto the world in a lasting way. How did you do that?
				</p>
				<p className={`paragraph full left`}>
					You did that through curiosity, or through resilience, or through
					intuition. You did that because something within you compelled you to.
					If you did something like this recently, then probably, you were
					pondering how imbalanced things are. In a previous decade, maybe you
					did so because you wanted to see what would happen, or because you
					realized that you&apos;d never reach Mars, so you invented a clever,
					impish way to move it a stone&apos;s throw and a skip away.
				</p>
				<p className={`paragraph full left`}>
					Scientifically speaking, you did that through the long, slow process
					of erosion.
				</p>
				<p className={`paragraph full left`}>
					Those pebbles you tossed - however small - altered the flow of the
					water and the air around them. They did this in their removal; in
					their displacement. Consider both the spaces that they left behind,
					and the spaces we now occupy.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>
					How to throw stones.
				</h2>
				<p className={`paragraph full left`}>
					Every action we take creates a vibration around us. You know this if
					you have ever jumped into the air, and listened to the sound that your
					feet made as they returned to the Earth.
				</p>
				<p className={`paragraph full left`}>
					Actions above some threshold of density and impact velocity create
					sounds. Most know this, in their way. This is nothing new to you.
				</p>
				<p className={`paragraph full left`}>
					I recently sat and considered the rippling of my own impact. I saw it
					in the way that a family of deer ran from me when I coughed in the
					forest. Do you know who flinches when you sneeze? Your victim.
				</p>
				<p className={`paragraph full left`}>
					I do not want fish to fear me. That is not the kind of blessing I want
					for me.
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
				<p className={`paragraph full left`}>What do you want for you?</p>
				<h2 className={`lowercase spaced style-1 thin`}>What is the wave.</h2>
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
				<h2 className={`lowercase spaced style-1 thin`}>how to wave.</h2>
				<p>
					You can just do it. You know how. If you don&apos;t, click around the
					site a little bit. See what clicks with you. That seems to work for
					the dolphins.
				</p>
				<h2 className={`lowercase spaced style-1 thin`}>What is here.</h2>{' '}
				<ul className={`no-deco`}>
					<li>
						Essays & Articles – Deep dives into concepts that shape our world.
					</li>
					<li>
						Visual Explorations – Mathematical and conceptual visualizations
						that make abstract ideas tangible.
					</li>{' '}
					<li>
						Experiments & Projects – Hands-on applications of the theories
						discussed.
					</li>{' '}
					<li>
						Community & Discussion – A space for those who want to engage in
						meaningful conversations.
					</li>
				</ul>{' '}
				<h2 className={`lowercase spaced style-1 thin`}>
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
