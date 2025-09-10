import { useFormContext, FieldValues, Path } from 'react-hook-form';
import { Input } from './Input';

export function FormField<TFieldValues extends FieldValues = FieldValues>({
	name,
	placeholder,
	disabled,
	type = 'text',
}: {
	name: Path<TFieldValues>;
	placeholder: string;
	disabled?: boolean;
	type?: 'text' | 'email' | 'password' | 'number';
}) {
	const { register, formState } = useFormContext<TFieldValues>();
	const error = formState.errors[name]?.message;

	const touched = (formState.touchedFields as Record<string, boolean>)[
		name as string
	];

	const errorMessage = typeof error === 'string' ? error : undefined;

	return (
		<Input
			{...register(name)}
			placeholder={placeholder}
			error={errorMessage}
			touched={touched}
			disabled={disabled}
			type={type}
		/>
	);
}
