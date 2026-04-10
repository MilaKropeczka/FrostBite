'use client';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { MainLayout } from '@/components/MainLayout';
import './globals.css';
import { AuthProvider } from '@/providers/AuthProvider';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body>
				<ReactQueryProvider>
					<AuthProvider>
						<MainLayout>{children}</MainLayout>
					</AuthProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
