import { useFormContext, FieldValues, Path } from 'react-hook-form';
import { Input } from './Input';

export function FormField<TFieldValues extends FieldValues = FieldValues>({
	name,
	placeholder,
}: {
	name: Path<TFieldValues>;
	placeholder: string;
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
		/>
	);
}
