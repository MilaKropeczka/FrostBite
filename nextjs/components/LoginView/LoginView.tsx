'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from '@/components/UI/FormField';
import { FormSection } from '@/components/UI/FormSection';
import { useLoginMutation } from '@/hooks/useLoginMutation';
import { toast } from '@/hooks/useToaster';
import { useRouter } from 'next/navigation';
import { DemoAccess } from './DemoAccess';

const loginSchema = z.object({
	email: z.string().min(3, 'Login must be at least 3 characters'),
	password: z.string().min(12, 'Password must be at least 12 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginView() {
	const router = useRouter();

	const loginMutation = useLoginMutation({
		onSuccess: () => {
			toast.success('Login successful!');
			router.push('/');
		},
		onError: () => {
			toast.error('Invalid email or password');
		},
	});

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	if (form.getValues().email === '') {
		form.setValue('email', 'test@test.pl');
		form.setValue('password', 'testpassword123');
	}

	const onSubmit = form.handleSubmit((values) => {
		loginMutation.mutate(values);
	});

	return (
		<FormProvider {...form}>
			<FormSection
				title='Log in'
				className='pt-16 max-w-sm'
				onSubmit={onSubmit}
				isSubmitting={loginMutation.isPending}
				isValid={form.formState.isValid}
				submitLabel='Login'
				submittingLabel='Logging in...'>
				<FormField name='email' placeholder='Email' />
				<FormField
					name='password'
					placeholder='Password'
					type='password'
				/>
			</FormSection>
			<DemoAccess />
		</FormProvider>
	);
}
