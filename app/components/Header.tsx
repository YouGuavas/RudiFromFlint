'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import routes from '../routes';
import { useTheme } from '@/app/theme/useTheme';
import contact from '../contact.json';
import phone_icon from '../../public/logos/phone_icon.svg';

import mail_icon from '../../public/logos/mail_icon.svg';
import location_icon from '../../public/logos/location_icon.svg';

import clsx from 'clsx';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
	const pathName = usePathname();
	const isActive = pathName === href;
	const { theme } = useTheme();
	return (
		<Link
			scroll={false}
			href={href}
			id={pathName.toLowerCase()}
			className={clsx(
				`style-1 lowercase spaced thin no-deco darken ${theme}`,
				isActive ? 'darken color-2' : 'color-2'
			)}
		>
			{children}
		</Link>
	);
}

export default function Header() {
	return (
		<header
			className={`width-full center py-1 px-1 bg-4 left flex fixed top z10`}
			id="menu-full"
		>
			<ul className={`flex no-deco width-half center between`}>
				<li>
					<Link
						className={`style-1 lowercase spaced thin no-deco darken`}
						href={`mailto:${contact.email}`}
					>
						<Image
							src={mail_icon.src}
							height={35}
							width={50}
							alt="Ripple logo"
						/>
					</Link>
				</li>
				<li>
					<Link
						className={`style-1 lowercase spaced thin no-deco darken`}
						href={`tel:+${contact.phone}`}
					>
						<Image
							src={phone_icon.src}
							height={35}
							width={50}
							alt="Ripple logo"
						/>
					</Link>
				</li>
				<li>
					<Link
						className={`style-1 lowercase spaced thin no-deco darken`}
						href="https://maps.app.goo.gl/UeGNSBdcxHJahoNK6"
					>
						<Image
							src={location_icon.src}
							height={35}
							width={50}
							alt="Ripple logo"
						/>
					</Link>
				</li>
			</ul>
		</header>
	);
}
