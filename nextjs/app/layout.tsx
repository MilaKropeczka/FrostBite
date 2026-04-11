import type { Metadata } from 'next';
import { AppProviders } from './providers';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'FrostBite',
		template: '%s | FrostBite',
	},
	description: 'Sklep FrostBite',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}
