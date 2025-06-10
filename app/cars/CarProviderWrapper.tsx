'use client';

import { Provider } from './CarContext';

export function CarProviderWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider>{children}</Provider>;
}
