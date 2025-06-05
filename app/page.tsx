import Image from 'next/image';
import Link from 'next/link';
import blue_car from '../public/logos/blue_car.svg';
import flag from '../public/logos/flag.svg';
import map from '../public/logos/map.svg';
import main_logo from '../public/logos/main_logo.svg';

import contact from './contact.json';

import EmailForm from './components/EmailForm';
import Carousel from './components/car-ousel';

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
			<main className={`main flex width-full gap-small px-1`}>
				<section className={`flex column center width-full`}>
					<h1 className={`undisplayed`}>Champion Auto Sales</h1>
					<div className={`banner-container`}>
						<Image
							src={main_logo.src}
							fill
							className={`relative`}
							alt="Car and flag"
						/>
					</div>
					<ul className={`flex no-deco gap-medium center`}>
						<li>{contact.phone}</li>
						<li>{contact.email}</li>
						<li className={`width-full`}>{contact.address}</li>
					</ul>
				</section>
				<section className={`flex center width-full `}>
					<div className={`width-full flex center gap-small`}>
						<div className={`icon-container`}>
							<Image src={blue_car.src} fill alt="Blue car" />
						</div>
						<h2
							className={`uppercase spaced style-1 thin flex gap-medium center font-large`}
						>
							{' '}
							Rudi&apos;s Rides.
						</h2>
						<div className={`icon-container`}>
							<Image src={flag.src} fill alt="Checkered flag." />
						</div>
					</div>
					<p className={`paragraph center width-half`}>
						Rudi is here to help you find the ride of your dreams within a
						budget that makes sense for you. All credit? All day. No credit? No
						problem.
					</p>
					<Carousel />
					<p className={`paragraph center width-half`}>
						TODO: Adjust layouts, edit content, convert car selector tool.
					</p>
				</section>

				<section className={`flex width-half`}>
					<h2
						className={`uppercase spaced style-1 thin center font-large width-full`}
					>
						About Rudi.
					</h2>
					<p className={`paragraph left-align`}>
						Rudi is a walking smile - a humble Champion who digs deep and fights
						hard for you. In short, Rudi&apos;s a good dude, and wants you to
						be, too. When you see Rudi smiling at you, you feel the warmth of a
						sunny day shining onto you, and you&apos;ll want to share that
						warmth with all around. What better way to get the word out than to
						ride in style?
					</p>
					<p className={`paragraph left-align`}>
						Behind Rudi&apos;s charismatic smile stands a man with a plan - to
						help you get a jump start on your best life. Are you ready to cross
						the finish line and watch the haters wave the white flag while you
						walk around with a checkered smile?
					</p>
				</section>

				<section className={`flex width-half center`}>
					<h2 className={`uppercase spaced style-1 thin font-large`}>
						Where is Rudi.
					</h2>
					<p className={`paragraph width-full left-align`}>
						Rudi fights for you at {contact.address}, just south of the exit
						ramps.
					</p>
					<div className={`image-container`}>
						<Image src={map.src} fill alt="Map tile" />{' '}
					</div>
					<p className={`paragraph width-full left-align`}>
						(This can be made interactive once I have my own internet connection
						- we can have Cartoon Rudi show people around the lot).
					</p>{' '}
					<p className={`paragraph width-full left-align`}>
						(Static map credit to Google Maps).
					</p>
				</section>

				<section className={`flex width-half`}>
					<h2 className={`uppercase spaced style-1 thin font-large`}>
						How to roll like a king.
					</h2>
					<p className={`paragraph width-full left-align`}>
						Let Rudi fight for you at Champion Auto Sales in Mount Morris,
						Michigan, where all credit is approved and everyone can find
						dignified financing fit for a King, a Queen, or Anyone In Between.
					</p>
					<ul className={`no-deco flex column gap-small width-full`}>
						<li
							className={`no-deco width-full flex column left-align font-medium`}
						>
							Reliable Ride
						</li>{' '}
						<li
							className={`no-deco width-full flex column left-align font-medium`}
						>
							Guaranteed Financing
						</li>{' '}
						<li
							className={`no-deco width-full flex column left-align font-medium`}
						>
							Dignified Smile
						</li>{' '}
					</ul>
					<p className={`paragraph width-full left-align`}>
						Get yourself a reliable used auto with Rudi.
					</p>
				</section>

				<section className={`flex width-full center`}>
					<h2 className={`uppercase spaced style-1 thin font-large`}>
						How to join your champion.
					</h2>{' '}
					<p className={`paragraph width-full center`}>
						If you haven&apos;t already, please consider adding yourself to
						Rudi&apos;s Winner&apos;s Circle for future updates:
					</p>
					<EmailForm />
				</section>
			</main>
		</ProviderWrapper>
	);
}
