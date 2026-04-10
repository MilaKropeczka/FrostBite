'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/providers/AuthProvider';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { isLoggedIn, isLoading } = useAuth();
	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			router.replace('/login');
		}
	}, [isLoggedIn, isLoading, router]);

	if (isLoading) {
		return null;
	}

	if (!isLoggedIn) {
		return null;
	}

	return <>{children}</>;
}
