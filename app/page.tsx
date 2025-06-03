import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../public/logos/blue_car.svg';
import EmailForm from './components/EmailForm';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
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
				<h2
					className={`uppercase spaced style-1 thin flex gap-small center font-large`}
				>
					<Image src={blue_car.src} height={75} width={75} alt="Ripple logo" />{' '}
					About Rudi.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Rudi is a walking smile - a Champion of the sun, with the sunniest
					disposition - and wants you to be, too. When you see Rudi smiling at
					you, you feel the warmth of a sunny day shining onto you, and
					you&apos;ll want to share that warmth with all around. What better way
					to get the word out than to ride in style?
				</p>
				<h1 className={`uppercase spaced style-1 thin font-large`}>
					About You.
				</h1>
				<p className={`paragraph width-full left-align`}>
					You already are a Champion, if you ask Rudi. Everybody knows that a
					Champion like you deserves a dignified ride - a King&apos;s Chariot
					(or two) - with a sunshine smile on the side.
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
				<h2 className={`uppercase spaced style-1 thin font-large`}>
					Where to find your champion.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Rudi fights for you at 6197 Clio Road, in Mount Morris, Michigan.
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
