import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from '@/components/UI/FormField';
import { FormSection } from '@/components/UI/FormSection';
import { Stack } from '@/components/UI/Stack';

const addressSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	street: z.string().min(2),
	city: z.string().min(2),
	postalCode: z.string().regex(/^\d{2}-\d{3}$/),
	country: z.string().min(2),
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
				onSubmit={onSubmit}
				isSubmitting={form.formState.isSubmitting}
				isValid={form.formState.isValid}>
				<Stack direction='row' spacing={4}>
					<FormField name='firstName' placeholder='First Name' />
					<FormField name='lastName' placeholder='Last Name' />
				</Stack>
				<FormField name='street' placeholder='Street and Number' />
				<Stack direction='row' spacing={4}>
					<FormField name='city' placeholder='City' />
					<FormField name='postalCode' placeholder='Postal Code' />
				</Stack>
				<FormField name='country' placeholder='Country' />
			</FormSection>
		</FormProvider>
	);
}
