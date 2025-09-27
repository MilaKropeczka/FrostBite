import { PropsWithChildren, MouseEventHandler } from 'react';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export function Button({
	children,
	onClick,
	className,
	disabled,
	type,
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			type={type}
			className={`rounded-xl px-6 py-2 text-white cursor-pointer transition-all duration-300 active:scale-95 bg-gradient-to-l from-pink-700 to-pink-800 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
