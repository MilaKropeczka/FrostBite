import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '@/services/api/useLoginMutation';

export const ProtectedLayout = () => {
	const token = getToken();

	return token ? <Outlet /> : <Navigate to='/' replace />;
};
