'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/hooks/useLoginMutation';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const [isAuth, setIsAuth] = useState<boolean | null>(null);

	useEffect(() => {
		const token = getToken();

		if (token) {
			setIsAuth(true);
		} else {
			router.replace('/');
		}
	}, [router]);

	if (isAuth === null) return null;

	return <>{children}</>;
}

// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import { ReactNode } from 'react';

// export default async function ProtectedLayout({
// 	children,
// }: {
// 	children: ReactNode;
// }) {
// 	const cookieStore = await cookies();
// 	const token = cookieStore.get('token')?.value;

// 	if (!token) {
// 		redirect('/');
// 	}

// 	return <>{children}</>;
// }
