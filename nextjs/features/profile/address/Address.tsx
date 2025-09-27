'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from '@/components/UI/FormField';
import { FormSection } from '@/components/UI/FormSection';
import { Stack } from '@/components/UI/Stack';

const addressSchema = z.object({
	firstName: z.string().min(2, 'First name must be at least 2 characters'),
	lastName: z.string().min(2, 'Last name must be at least 2 characters'),
	street: z.string().min(2, 'Street must be at least 2 characters'),
	city: z.string().min(2, 'City must be at least 2 characters'),
	postalCode: z
		.string()
		.regex(/^\d{2}-\d{3}$/, 'Invalid postal code format (00-000)'),
	country: z.string().min(2, 'Country must be at least 2 characters'),
});

export type AddressFormValues = z.infer<typeof addressSchema>;

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

	const onSubmit = form.handleSubmit((values) => {
		console.log('Form submitted:', values);
	});

	return (
		<FormProvider {...form}>
			<FormSection
				title='Shipping Address'
				className='py-16 mb-12 p-6'
				onSubmit={onSubmit}
				isSubmitting={form.formState.isSubmitting}
				isValid={form.formState.isValid}>
				<Stack direction={{ base: 'col', md: 'row' }} spacing={4}>
					<FormField name='firstName' placeholder='First Name' />
					<FormField name='lastName' placeholder='Last Name' />
				</Stack>
				<FormField name='street' placeholder='Street and Number' />
				<Stack direction={{ base: 'col', md: 'row' }} spacing={4}>
					<FormField name='city' placeholder='City' />
					<FormField name='postalCode' placeholder='Postal Code' />
				</Stack>
				<FormField name='country' placeholder='Country' />
			</FormSection>
		</FormProvider>
	);
}
