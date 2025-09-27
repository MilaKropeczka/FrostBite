'use client';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { MainLayout } from '@/components/MainLayout';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body>
				<ReactQueryProvider>
					<MainLayout>{children}</MainLayout>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
