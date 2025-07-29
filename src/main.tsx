import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

async function enableMocksAndRenderApp() {
	if (import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW === 'true') {
		const { worker } = await import('./mocks/browser.ts');
		console.log(import.meta.env.DEV);
		await worker.start({
			serviceWorker: {
				url: '/FrostBite/mockServiceWorker.js',
			},
		});
	}

	const queryClient = new QueryClient();

	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			{/* <BrowserRouter> */}
			<BrowserRouter basename='/FrostBite'>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</StrictMode>
	);
}

enableMocksAndRenderApp();
