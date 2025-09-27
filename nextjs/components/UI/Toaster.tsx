'use client';
import { useToast } from '@/hooks/useToaster';
import { Toast } from './Toast';

export function Toaster() {
	const { toasts, removeToast } = useToast();

	if (toasts.length === 0) return null;

	return (
		<div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2 max-w-sm w-full px-4'>
			{toasts.map((toast) => (
				<Toast
					key={toast.id}
					message={toast.message}
					type={toast.type}
					onClose={() => removeToast(toast.id)}
					duration={toast.duration}
				/>
			))}
		</div>
	);
}
