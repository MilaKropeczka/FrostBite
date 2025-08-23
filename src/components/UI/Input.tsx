import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
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
	className = '',
	...props
}: InputProps) {
	const { watch } = useFormContext();
	const currentValue = watch(name);
	const val = value ?? currentValue ?? '';
	const isError = !!error && touched;
	const isValid = !error && (touched || val);

	const inputClass = [
		'flex-1 p-2 border rounded focus:outline-none focus:ring-2 bg-gray-50 placeholder-pink-900/30',
		isError &&
			'border-red-800 border-2 bg-red-50 focus:ring-red-500/60 text-red-900',
		isValid &&
			!isError &&
			'border-pink-700/30 bg-pink-50/80 focus:ring-pink-500/60 text-pink-900',
		!isError &&
			!isValid &&
			'border-pink-900/30 focus:ring-pink-700/50 focus:bg-pink-100',
		className,
	]
		.filter(Boolean)
		.join(' ');

	const Icon = isError
		? AiOutlineCloseCircle
		: isValid
		? AiOutlineCheckCircle
		: null;

	const iconClass = isError ? 'text-red-600' : 'text-green-600';

	return (
		<div className='flex flex-col flex-1 relative'>
			<div className='relative flex flex-1'>
				<input
					type={type}
					name={name}
					value={val}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					aria-invalid={isError}
					className={inputClass}
					{...props}
				/>

				{Icon && (
					<Icon
						size={20}
						className={`absolute right-2 top-1/2 -translate-y-1/2 ${iconClass}`}
						aria-hidden='true'
					/>
				)}
			</div>

			<span className='text-red-800 text-sm min-h-[1.25rem]'>
				{error || '\u00A0'}
			</span>
		</div>
	);
}
