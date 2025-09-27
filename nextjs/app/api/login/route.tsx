import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const users = [
		{ id: '1', email: 'test@test.pl', password: 'testpassword123' },
	];
	const { email, password } = await request.json();

	const user = users.find(
		(u) => u.email === email && u.password === password
	);

	if (!user) {
		return NextResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 }
		);
	}

	return NextResponse.json({ token: `token-${user.id}` });
}
// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export async function POST(request: Request) {
// 	const { email, password } = await request.json();

// 	if (email === 'test@test.pl' && password === 'testpassword123') {
// 		const token = 'mocked-jwt-token-123';
// 		const cookieStore = await cookies();

// 		cookieStore.set('token', token, {
// 			httpOnly: true,
// 			secure: process.env.NODE_ENV === 'production',
// 			sameSite: 'strict',
// 			maxAge: 60 * 60 * 24 * 7,
// 			path: '/',
// 		});

// 		return NextResponse.json({ token });
// 	}

// 	return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
// }

// export async function DELETE() {
// 	const cookieStore = await cookies();
// 	cookieStore.delete('token');

// 	return NextResponse.json({ message: 'Logged out successfully' });
// }
