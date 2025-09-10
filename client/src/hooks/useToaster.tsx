// hooks/useToast.ts
import { useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
	id: string;
	message: string;
	type: ToastType;
	duration?: number;
}

let toastFunctions: any = null;

export function useToast() {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = useCallback(
		(
			message: string,
			type: ToastType = 'info',
			duration: number = 3000
		) => {
			const id = Math.random().toString(36).substr(2, 9);

			setToasts((prev) => [...prev, { id, message, type, duration }]);

			if (duration > 0) {
				setTimeout(() => {
					removeToast(id);
				}, duration);
			}

			return id;
		},
		[]
	);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const clearAllToasts = useCallback(() => {
		setToasts([]);
	}, []);

	if (typeof window !== 'undefined') {
		toastFunctions = {
			success: (message: string, duration?: number) =>
				addToast(message, 'success', duration),
			error: (message: string, duration?: number) =>
				addToast(message, 'error', duration),
			warning: (message: string, duration?: number) =>
				addToast(message, 'warning', duration),
			info: (message: string, duration?: number) =>
				addToast(message, 'info', duration),
		};
	}

	return {
		toasts,
		addToast,
		removeToast,
		clearAllToasts,
		success: (message: string, duration?: number) =>
			addToast(message, 'success', duration),
		error: (message: string, duration?: number) =>
			addToast(message, 'error', duration),
		warning: (message: string, duration?: number) =>
			addToast(message, 'warning', duration),
		info: (message: string, duration?: number) =>
			addToast(message, 'info', duration),
	};
}

export const toast = {
	success: (message: string, duration?: number) =>
		toastFunctions?.success(message, duration),
	error: (message: string, duration?: number) =>
		toastFunctions?.error(message, duration),
	warning: (message: string, duration?: number) =>
		toastFunctions?.warning(message, duration),
	info: (message: string, duration?: number) =>
		toastFunctions?.info(message, duration),
};
