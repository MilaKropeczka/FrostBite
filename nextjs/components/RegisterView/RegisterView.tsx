'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from '@/components/UI/FormField';
import { FormSection } from '@/components/UI/FormSection';
import { toast } from '@/hooks/useToaster';

const registerSchema = z
	.object({
		email: z
			.string()
			.email('Invalid email address')
			.min(3, 'Email is too short'),
		password: z.string().min(12, 'Password must be at least 12 characters'),
		confirmPassword: z.string().min(12, 'Please confirm your password'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});

export type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterView() {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = form.handleSubmit((values) => {
		console.log('User Data:', values);
		toast.success('Registration success! Check console for data.');
	});

	return (
		<FormProvider {...form}>
			<FormSection
				title='Create an account'
				className='pt-16 max-w-sm'
				onSubmit={onSubmit}
				isSubmitting={form.formState.isSubmitting}
				isValid={form.formState.isValid}
				submitLabel='Register'
				submittingLabel='Processing...'>
				<FormField name='email' placeholder='Email' type='email' />
				<FormField
					name='password'
					placeholder='Password'
					type='password'
				/>
				<FormField
					name='confirmPassword'
					placeholder='Confirm Password'
					type='password'
				/>
			</FormSection>
		</FormProvider>
	);
}
