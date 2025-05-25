import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import routes from './routes';
import categories from '../categories';
import InteractiveList from '../components/InteractiveList';

import hand from '../../public/graphite/hand.png';
import raven from '../../public/memes/crow_art.png';

export const metadata: Metadata = {
	title: 'Patripples | How to Count Change',
	description:
		'Learn how to count change with patripples. Calculated by Patrick Yambrick.',
};
export default function Home() {
	return (
		<main className={`main left height-full`}>
			<h1 className={`style-1 thin lowercase`}>count my change.</h1>
			<p className={`paragraph width-full block left-align`}>(In progress.)</p>
			<p className={`paragraph width-full block left-align`}>
				There exist a number of ways in which to go about approximating the
				impact of any action taken upon a space. One might simply guess, or
				intuit. One might calculate the curvature of a set of small assumptions
				and extrapolate based off of what arises from there. This is my
				preferred method. Indeed, when all we have to work with are ranges and
				approximations, this is often the way, as we discover through the course
				of an intermediate mathematical education.
			</p>
			<p className={`paragraph width-full block left-align`}>
				The accuracy of a conclusion based on several uncertain assumptions
				depends on the accuracy of each assumption - but the overall confidence
				shrinks with each additionl imperfect assumption. If I am 95% sure that
				I am right about some assumption I have made, that may seem fine. In
				many cases, it is. The danger lies in stacking assumptions. 95% can be
				represented decimally as 0.95.
			</p>
			<h2 className={`style-1 thin lowercase`}>How to get wronger.</h2>
			<p className={`paragraph width-full block left-align`}>0.95 x 0.95 = ?</p>
			<p className={`paragraph width-full block left-align`}>95 x 95 = ?</p>
			<p className={`paragraph width-full block left-align`}>5 x 5 = 25</p>
			<p className={`paragraph width-full block left-align`}>
				5 x 90 = 450 (x2) = 900 (as I examine this, I notice that it would have
				been more efficient to have doubled the five from outset, but I pursue
				mathematics via spiral - 10 x 90; this line will remain here to
				demonstrate my self-revision process - 10 x 90 = 900)
			</p>
			<p className={`paragraph width-full block left-align`}>
				90 x 90 = 8100 (9 x 9 = 81; 10 x 10 = 100; 100 x 81 = 8100)
			</p>
			<p className={`paragraph width-full block left-align`}>95 x 95 = 9025</p>
			<p className={`paragraph width-full block left-align`}>
				0.95 x 0.95 = 0.9025
			</p>
			<p className={`paragraph width-full block left-align`}>
				Now that we&apos;ve made two assumptions in a row, each with a generous
				95% accuracy rate, we are probably around 90% right, by my angular math.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Do you notice how that is a multiple of nine, and some change? 9 x 1000
				= 9000; 5 x 5 = 25. 9025. That pattern holds. 0.95^4 = 0.95 x 0.95 x
				0.95 x 0.95 = 0.9025 x 0.9025 = 0.81450625. Make note that a wily enough
				datamancer could make this look like that long decimal, or like 0.81, or
				- by some stretches of the imagination, <em>0.82</em>. This will be an
				important idea later. For now - hold in mind that even in the relatively
				objective world of numbers, interpretation often matters. And recall the
				truth of the multiples of nine - that they always add up to nine.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Suppose that, rather than begin with a 95% accuracy strength rating for
				each of our assumptions, we begin at 75%. Our approximation now looks as
				follows:
			</p>
			<p className={`paragraph width-full block left-align`}>0.75 x 0.75 = ?</p>
			<p className={`paragraph width-full block left-align`}>75 x 75 = ?</p>
			<p className={`paragraph width-full block left-align`}>
				5 x 5 = 25 (Stack those easy wins.)
			</p>
			<p className={`paragraph width-full block left-align`}>70 x 70 = 4900</p>
			<p className={`paragraph width-full block left-align`}>
				2x(70 x 5) = 10 x 70 = 700
			</p>
			<p className={`paragraph width-full block left-align`}>
				Add those totals (4900 + 700 + 25), and we arrive at 0.5625, or 56.25%
				accuracy rate, following two assumptions.
			</p>
			<p className={`paragraph width-full block left-align`}>
				Note the trends at play. In both instances, we see progressively worse
				results over time. If we are <em>exceptionally</em> clever, our
				best-case scenario is that, as we make successive correct guesses, the
				likelihood of our continuing to guess correctly decreases at a slightly
				less depressing rate than the person who was guessing with an average
				success rate.
			</p>
			<p className={`paragraph width-full block left-align`}>Oof.</p>

			<h2 className={`style-1 thin lowercase`}>How to right wrong, angles.</h2>
			<p className={`paragraph width-full block left-align`}>
				Consider the graceful hand of an artist.
			</p>
			<Image
				alt="A hand making a finger guns gesture"
				height={300}
				width={425}
				src={hand.src}
			/>
			<p className={`paragraph width-full block left-align`}>
				That artist sat, incorrectly - if reasonably - drawing their own hand,
				for however long it took them. When we leave a stray line in our
				drawing, or brushstroke in our painting, we have a decision to make -
			</p>
			<p className={`paragraph width-full block left-align`}>
				We can leave it:
			</p>
			<Image
				alt="A tumblr thread about a raven using a paintbrush."
				height={500}
				width={425}
				src={raven.src}
			/>

			<h2 className={`style-1 thin lowercase`}>How change matters.</h2>
			<p className={`paragraph width-full block left-align`}>
				Say that I&apos;ve got one tree. That tree is somewhere between zero and
				fifty years old. It is an oak tree (or an elm, or a willow, or a pine
				tree). We are in an urban (or a suburban or a rural) domain. This
				results in our tree&apos;s having some Base Trunk Width (BTW). We are
				going to make a set of assumptions which arrive us at our Base Trunk
				Width (BTW).
			</p>
			<p className={`paragraph width-full block left-align`}>
				From there (BTW), we are going to derive some nominal value, using as
				few speculative generosities as possible - an effort to remain in
				balance with{' '}
				<Link className={`no-deco spaced`} href="../read/glossary/occams_razor">
					Occam&apos;s Razor
				</Link>
				. We may need to make some assumptions and speculations together, but
				these will be rooted in reality, and their leaps small. This will
				generate our Expected Nominal Tree (ENT) value.
			</p>
		</main>
	);
}
