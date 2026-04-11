import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
	const cookieStore = await cookies();
	const token = cookieStore.get('auth-token');

	if (!token) {
		return NextResponse.json({ message: 'Not logged in' }, { status: 401 });
	}

	return NextResponse.json({
		user: {
			id: '1',
			email: 'test@test.pl',
			role: 'admin',
		},
	});
}
