import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const users = [
		{
			id: '1',
			email: 'test@test.pl',
			password: 'testpassword123',
			role: 'admin',
		},
	];
	const { email, password } = await request.json();

	const user = users.find(
		(u) => u.email === email && u.password === password,
	);

	if (!user) {
		return NextResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 },
		);
	}

	const response = NextResponse.json({
		message: 'Logged in successfully',
		user: { id: user.id, email: user.email, role: user.role },
	});

	response.cookies.set('auth-token', `token-${user.id}`, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	return response;
}
