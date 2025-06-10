import Image from 'next/image';
import Link from 'next/link';
import { cars } from './cars/cars';
import flag from '../public/logos/flag.svg';
import map from '../public/logos/map.svg';
import main_logo from '../public/logos/main_logo.svg';

import contact from './contact.json';

import EmailForm from './components/EmailForm';
import Carousel from './components/car-ousel';

import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Rudi | Champion Used Cars in Flint, MI',
	description:
		'Dignified rides and reliable used cars near Flint, MI — by RudiFromFlint. Website supported and visualized by Patrick Other.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function Home() {
	const selected_car = cars[0];
	return (
		<main className={`main flex width-full gap-small px-1`}>
			<section className={`flex column center width-full`}>
				<h1 className={`undisplayed`}>Champion Auto Sales</h1>
				<div className={`banner-container z5 centered`}>
					<Image
						src={main_logo.src}
						fill
						className={`relative`}
						alt="Car and flag"
					/>
				</div>
				<div className={`hero center`}></div>
				<ul className={`flex z5 no-deco gap-medium center`}>
					<li>
						<Link
							className={`no-deco style-1 spaced lowercase`}
							href={`tel:+${contact.phone}`}
						>
							{contact.phone}
						</Link>
					</li>
					<li>
						<Link
							className={`no-deco style-1 spaced lowercase`}
							href={`mailto:${contact.email}`}
						>
							{contact.email}
						</Link>
					</li>
					<li className={`width-full`}>
						<Link
							href="https://maps.app.goo.gl/UeGNSBdcxHJahoNK6"
							className={`no-deco style-1 spaced`}
						>
							{contact.address}
						</Link>
					</li>
				</ul>
			</section>

			<section className={`flex center width-full column`}>
				<div className={`width-full flex center gap-small`}>
					<div className={`icon-container z5`}>
						<Image src={selected_car.src} fill alt="Blue car" />
					</div>
					<h2
						className={`uppercase spaced style-1 thin flex gap-medium center font-large`}
					>
						{' '}
						Rudi&apos;s Rides.
					</h2>
					<div className={`icon-container z5`}>
						<Image src={flag.src} fill alt="Checkered flag." />
					</div>
				</div>
				<p className={`paragraph center width-half`}>
					Rudi is here to help you find the ride of your dreams within a budget
					that makes sense for you. All credit? All day. No credit? No problem.
				</p>
				<p className={`paragraph center width-half`}>
					Drive Away Today with Guaranteed Financing —{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.wefinanceeveryone.com/"
					>
						Champion Auto Sales
					</Link>
					, Mt. Morris, MI.
				</p>
				<Carousel />
			</section>

			<section className={`flex width-half`}>
				<h2
					className={`uppercase spaced style-1 thin center font-large width-full`}
				>
					What Rudi Does.
				</h2>
				<p className={`paragraph left-align`}>
					Rudi serves the greater Flint area, providing high-quality used autos
					at an affordable rate. He fights hard for you on your quest for a
					dignified daily driver.
				</p>
				<p className={`paragraph left-align`}>
					Rudi fights for your right to a decent driver despite any credit
					concerns. Based at{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.wefinanceeveryone.com/"
					>
						Champion Auto Sales
					</Link>
					, in Mt. Morris, Michigan - where motorists can find on-lot, buy
					here/pay here, and financing options - Rudi knows &quot;reliable&quot;
					when he sees it. You will, too, when you see Rudi fighting for you.
				</p>
			</section>

			<section className={`flex width-half`}>
				<h2
					className={`uppercase spaced style-1 thin center font-large width-full`}
				>
					About Champion.
				</h2>
				<p className={`paragraph left-align`}>
					<Link
						className={`no-deco style-1`}
						href="https://www.wefinanceeveryone.com/"
					>
						Champion Auto Sales
					</Link>{' '}
					is a buy here, pay here lot, where you can find the used car
					that&apos;s right for you.
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
					hard for you. In short, Rudi&apos;s a good dude, and wants you to be,
					too. When you see Rudi smiling at you, you feel the warmth of a sunny
					day shining onto you, and you&apos;ll want to share that warmth with
					all around. What better way to get the word out than to ride in style?
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
					Where to Find Rudi.
				</h2>
				<p className={`paragraph width-full left-align`}>
					Rudi fights for you at{' '}
					<Link
						href="https://maps.app.goo.gl/UeGNSBdcxHJahoNK6"
						className={`no-deco style-1 spaced`}
					>
						{contact.address}
					</Link>
					, just south of the exit ramps.
				</p>
				<div className={`image-container z5`}>
					<Image src={map.src} fill alt="Map tile" />{' '}
				</div>
				<p className={`paragraph width-full left-align`}>
					(This can be made interactive once I have my own internet connection -
					we can have Cartoon Rudi show people around the lot).
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
					Michigan, where all credit is approved and everyone can find dignified
					financing fit for a King, a Queen, or Anyone In Between.
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
						Dignified Drive
					</li>{' '}
					<li
						className={`no-deco width-full flex column left-align font-medium`}
					>
						Buy Here, Pay Here
					</li>
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
	);
}
