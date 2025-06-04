import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../public/logos/blue_car.svg';
import flag from '../public/logos/flag.svg';
import map from '../public/logos/map.svg';

import EmailForm from './components/EmailForm';

import type { Metadata } from 'next';
import { ProviderWrapper } from './ThemeProviderWrapper';
export const metadata: Metadata = {
	title: 'Rudi | Champion Used Cars in Flint, MI',
	description:
		'Dignified rides and reliable used cars near Flint, MI — by RudiFromFlint. Website supported and visualized by Patrick Other.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main center`}>
				<h1
					className={`uppercase spaced style-1 thin flex gap-medium center font-large`}
				>
					<Image src={blue_car.src} height={75} width={75} alt="Blue car" />{' '}
					Rudi&apos;s Rides.
					<Image src={flag.src} height={75} width={75} alt="Checkered flag." />
				</h1>
				<p className={`paragraph width-full left-align`}>
					(Possibly a carousel of photos of Rudi's available or previously sold
					cars)
				</p>
				<h2
					className={`uppercase spaced style-1 thin flex gap-medium center font-large`}
				>
					About Rudi.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Rudi is a walking smile - a Champion of the sun, with the sunniest
					disposition. In short, Rudi&apos;s a good dude, and wants you to be,
					too. When you see Rudi smiling at you, you feel the warmth of a sunny
					day shining onto you, and you&apos;ll want to share that warmth with
					all around. What better way to get the word out than to ride in style?
				</p>
				<p className={`paragraph width-full left-align`}>
					Behind Rudi&apos;s charismatic smile stands a man with a plan - to
					help you get a jump start on your best life. Are you ready to cross
					the finish line and watch the haters wave the white flag while you
					walk around with a checkered smile?
				</p>
				<h1 className={`uppercase spaced style-1 thin font-large`}>
					About You.
				</h1>
				<p className={`paragraph width-full left-align`}>
					You already are a Champion, if you ask Rudi. Everybody knows that a
					Champion like you deserves a dignified ride - a King&apos;s Chariot
					(or two) - with a sunshine smile on the side.
				</p>
				<p className={`paragraph width-full left-align`}>
					You are someone who is looking for the right set of reliable wheels to
					help you get to moving on your own two feet.
				</p>
				<p className={`paragraph width-full left-align`}>
					You have a sense for destiny and a drive for legacy.
				</p>
				<p className={`paragraph width-full left-align`}>
					Looking to buy a used car near Flint, Michigan? Would you rather it be
					a Champion&apos;s Chariot than some lame lemon? Rudi&apos;s the
					Champion for you.
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to smile like a champion.
				</h2>
				<p className={`paragraph width-full left-align`}>
					You can carry some of Rudi&apos;s sunlight with you by envisioning
					yourself beaming bright as you step up out of your chariot, ready to
					be champion.
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to roll like a king.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Let Rudi fight for you at Champion Auto Sales in Mount Morris,
					Michigan, where all credit is approved and everyone can find dignified
					financing fit for a King, a Queen, or Anyone In Between.
				</p>
				<ul className={`no-deco flex column gap-small width-full`}>
					<li
						className={`no-deco width-full flex column left-align font-large`}
					>
						Reliable Ride
					</li>{' '}
					<li
						className={`no-deco width-full flex column left-align font-large`}
					>
						Guaranteed Financing
					</li>{' '}
					<li
						className={`no-deco width-full flex column left-align font-large`}
					>
						Dignified Smile
					</li>{' '}
				</ul>
				<p className={`paragraph width-full left-align`}>
					Get yourself a reliable used auto with Rudi.
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					Where to find your champion.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Rudi fights for you at 6197 Clio Road, in Mount Morris, Michigan.
				</p>
				<Image src={map.src} height={600} width={600} alt="Blue car" />{' '}
				<p className={`paragraph width-full left-align`}>
					(This can be made interactive once I have my own internet connection -
					we can have Cartoon Rudi show people around the lot).
				</p>{' '}
				<p className={`paragraph width-full left-align`}>
					(Static map credit to Google Maps).
				</p>
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					How to join your champion.
				</h2>{' '}
				<p className={`paragraph width-full left-align`}>
					If you haven&apos;t already, please consider adding yourself to
					Rudi&apos;s Winner&apos;s Circle for future updates:
				</p>
				<EmailForm />
			</main>
		</ProviderWrapper>
	);
}
