import { ChangeEvent } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

interface InputProps {
	name: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: 'text' | 'email' | 'password' | 'number';
	required?: boolean;
	touched?: boolean;
	error?: string;
	className?: string;
}

export function Input({
	name,
	value,
	onChange,
	placeholder,
	type = 'text',
	required = false,
	error,
	touched,
	className,
	...props
}: InputProps) {
	const isValid = !error && touched;
	const isError = !!error && touched;
	const errorId = `${name}-error`;

	return (
		<div className='flex flex-col flex-1 relative'>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				aria-invalid={isError}
				aria-describedby={error ? errorId : undefined}
				{...props}
				className={`flex-1 p-2 border rounded focus:outline-none focus:ring-2 bg-gray-50 placeholder-pink-900/30 text-pink-900 
          ${
				isError
					? 'border-red-800 border-2 bg-red-50 focus:ring-red-500/60'
					: ''
			} 
          ${
				isValid
					? 'border-green-600 bg-green-50 focus:ring-green-500/60'
					: ''
			} 
          ${
				!isError && !isValid
					? 'border-pink-900/30 focus:ring-pink-700/50 focus:bg-pink-100'
					: ''
			} 
          ${className}`}
			/>

			{isValid && (
				<AiOutlineCheckCircle
					size={20}
					className='absolute right-2 top-5 -translate-y-1/2 text-green-600'
					aria-hidden='true'
				/>
			)}

			{isError && (
				<AiOutlineCloseCircle
					size={20}
					className='absolute right-2 top-5 -translate-y-1/2 text-red-600'
					aria-hidden='true'
				/>
			)}

			<span id={errorId} className='text-red-800 text-sm min-h-[1.25rem]'>
				{error || '\u00A0'}
			</span>
		</div>
	);
}
