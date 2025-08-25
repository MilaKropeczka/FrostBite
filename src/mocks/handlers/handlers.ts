import { shopHandlers } from '@/mocks/handlers/Shop/Shop';
import { apiHandlers } from '@/mocks/handlers/Login/users';

export const handlers = [...shopHandlers, ...apiHandlers];
