'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import routes from '../routes';
import { useTheme } from '@/app/theme/useTheme';
import blue_car from '../../public/logos/blue_car.svg';
import flag from '../../public/logos/flag.svg';
import phone_icon from '../../public/logos/phone_icon.svg';

import clsx from 'clsx';
import { ProviderWrapper } from '../ThemeProviderWrapper';

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

export default function Nav() {
	return (
		<ProviderWrapper>
			<nav
				className={`${styles.myNavFull} py-1 px-1 bg-4 left flex fixed`}
				id="menu-full"
			>
				<ul className={`flex no-deco`}>
					<li>
						<NavLink href="/">
							<Image src={flag.src} height={50} width={50} alt="Flag Icon" />
						</NavLink>
					</li>
					<li>
						<NavLink href="/cars">
							<Image src={blue_car.src} height={50} width={50} alt="Car Icon" />
						</NavLink>
					</li>
					<li>
						<NavLink href="/contact">
							<Image
								src={phone_icon.src}
								height={35}
								width={50}
								alt="Ripple logo"
							/>
						</NavLink>
					</li>
				</ul>
			</nav>
		</ProviderWrapper>
	);
}
