import { SecondTitle } from '@/components/UI/SecondTitle';
import { Button } from '@/components/UI/Button';
import { Input } from '@/components/UI/Input';
import { z } from 'zod';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const countryValues = ['poland'] as const;

const addressSchema = z.object({
	firstName: z.string().min(2, 'First name is required'),
	lastName: z.string().min(2, 'Last name is required'),
	street: z.string().min(2, 'Street is required'),
	city: z.string().min(2, 'City is required'),
	postalCode: z
		.string()
		.regex(/^\d{2}-\d{3}$/, 'Postal code must be in format XX-XXX'),
	country: z.enum(countryValues).refine((val) => val === 'poland', {
		message: 'Shipping is available within Poland only.',
	}),
});

export type AddressFormValues = z.infer<typeof addressSchema>;

function FormField({
	name,
	placeholder,
}: {
	name: keyof AddressFormValues;
	placeholder: string;
}) {
	const { register, formState } = useFormContext<AddressFormValues>();
	const error = formState.errors[name]?.message;
	const touched = formState.touchedFields[name];
	return (
		<Input
			{...register(name)}
			placeholder={placeholder}
			error={error}
			touched={touched}
		/>
	);
}

export function Address() {
	const form = useForm<AddressFormValues>({
		resolver: zodResolver(addressSchema),
		mode: 'all',
		defaultValues: {
			firstName: '',
			lastName: '',
			street: '',
			city: '',
			postalCode: '',
			country: '',
		},
	});

	const onSubmit = (values: AddressFormValues) => {
		console.log('Form submitted:', values);
	};

	return (
		<section className='w-full max-w-2xl py-16 mb-12 p-6'>
			<SecondTitle title='Shipping Address' />
			<div className='bg-white/80 shadow-lg p-6 rounded-xl'>
				<FormProvider {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-2'>
						<div className='flex gap-4'>
							<FormField
								name='firstName'
								placeholder='First Name'
							/>
							<FormField
								name='lastName'
								placeholder='Last Name'
							/>
						</div>
						<FormField
							name='street'
							placeholder='Street and Number'
						/>
						<div className='flex gap-4'>
							<FormField name='city' placeholder='City' />
							<FormField
								name='postalCode'
								placeholder='Postal Code'
							/>
						</div>
						<FormField name='country' placeholder='Country' />
						<Button
							type='submit'
							className='font-semibold py-3'
							disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting
								? 'Saving...'
								: 'Save Address'}
						</Button>
					</form>
				</FormProvider>
			</div>
		</section>
	);
}
