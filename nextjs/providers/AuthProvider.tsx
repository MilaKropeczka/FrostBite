'use client';
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';
import axios from 'axios';

type User = { id: string; email: string; role: string };

type AuthContextType = {
	user: User | null;
	isLoggedIn: boolean;
	isLoading: boolean;
	login: (userData: User) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkSession = async () => {
			try {
				const response = await axios.get('/api/me');
				setUser(response.data.user);
			} catch (err) {
				setUser(null);
			} finally {
				setIsLoading(false);
			}
		};

		checkSession();
	}, []);

	const login = (userData: User) => {
		setUser(userData);
		setIsLoading(false);
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, isLoggedIn: !!user, isLoading, login, logout }}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};
