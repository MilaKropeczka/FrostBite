import { setupWorker } from 'msw/browser';

import { handlers } from '@/mocks/handlers/handlers';

export const worker = setupWorker(...handlers);
