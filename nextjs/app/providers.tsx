'use client';

import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { MainLayout } from '@/components/MainLayout';
import { AuthProvider } from '@/providers/AuthProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
	return (
		<ReactQueryProvider>
			<AuthProvider>
				<MainLayout>{children}</MainLayout>
			</AuthProvider>
		</ReactQueryProvider>
	);
}
