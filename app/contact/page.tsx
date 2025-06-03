import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import styles from '../page.module.css';
import { ProviderWrapper } from '../ThemeProviderWrapper';

export const metadata: Metadata = {
	title: 'Rudi | Champion Used Cars in Flint, MI - Contact',
	description:
		'Dignified rides and reliable used cars near Flint, MI — by RudiFromFlint. Website supported and visualized by Patrick Other. Contact Page.',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function Home() {
	return (
		<ProviderWrapper>
			<main className={`main center`}>
				<h1 className="uppercase style-2 thin font-large">
					Want to contact Rudi?
				</h1>
				<p className={`style-1 lowercase`}>
					Email:{' '}
					<Link
						className={`no-deco style-1 spaced lowercase`}
						href="mailto:pat@patripples.com"
					>
						pat@patripples.com
					</Link>
				</p>
				<h2 className="uppercase style-2 thin font-large">
					Want to know more about the dealership?
				</h2>
				<p className={`style-1`}>
					Check out{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.wefinanceeveryone.com/"
					>
						https://www.wefinanceeveryone.com/
					</Link>
				</p>
				<h2 className="uppercase style-2 thin font-large">
					Want Pat to make you a website?
				</h2>
				<p className={`paragraph width-full block`}>
					Pat builds custom React and Nextjs websites, authors content, and much
					more at{' '}
					<Link
						className={`no-deco style-1`}
						href="https://www.patripples.com/"
					>
						https://www.patripples.com/
					</Link>
				</p>

				<h2 className="uppercase style-2 thin font-large">
					Want to know about your privacy?
				</h2>
				<p className={`paragraph`}>
					Rudi uses Vercel&apos;s web analytics to understand how this site is
					used and to improve your experience. This data is anonymous and does
					not include any personal or sensitive information.
				</p>
				<p className={`paragraph`}>
					Rudi stores email addresses, first names, last names, and phone
					numbers, as provided in the form on the{' '}
					<Link className={`no-deco style-1`} href="..">
						home
					</Link>{' '}
					page, in a database for use in personal mailing lists. This allows me
					to keep my site free and clean, with minimal advertising to you.
				</p>
			</main>
		</ProviderWrapper>
	);
}
