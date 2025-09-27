'use client';
import { ToastType } from '@/hooks/useToaster';
import { useEffect, useState } from 'react';
import {
	FiCheckCircle,
	FiXCircle,
	FiX,
	FiAlertTriangle,
	FiInfo,
} from 'react-icons/fi';

interface ToastProps {
	message: string;
	type: ToastType;
	onClose: () => void;
	duration?: number;
}

const toastStyles: Record<ToastType, string> = {
	success: 'bg-green-800/90 border-green-900',
	error: 'bg-red-800/90 border-red-900',
	warning: 'bg-yellow-800/90 border-yellow-900',
	info: 'bg-blue-800/90 border-blue-900',
};

const icons: Record<ToastType, React.ReactNode> = {
	success: <FiCheckCircle className='text-lg' />,
	error: <FiXCircle className='text-lg' />,
	warning: <FiAlertTriangle className='text-lg' />,
	info: <FiInfo className='text-lg' />,
};

export function Toast({ message, type, onClose, duration = 4000 }: ToastProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);

		const timer = setTimeout(() => {
			setIsVisible(false);
			setTimeout(onClose, 300);
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	return (
		<div
			className={`
        transform transition-all duration-300 ease-in-out
        ${
			isVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-full opacity-0'
		}
        flex items-center gap-3 py-3 px-6 rounded-lg border-2 text-white font-medium
        shadow-lg ${toastStyles[type]}
      `}>
			<span className='flex items-center justify-center'>
				{icons[type]}
			</span>
			<span className='flex-1'>{message}</span>
			<button
				onClick={() => {
					setIsVisible(false);
					setTimeout(onClose, 300);
				}}
				className='text-white hover:text-gray-200 text-xl cursor-pointer'>
				<FiX className='text-lg' />
			</button>
		</div>
	);
}
