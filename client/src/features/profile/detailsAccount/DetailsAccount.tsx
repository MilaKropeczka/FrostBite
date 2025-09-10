import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField } from '@/components/UI/FormField';
import { FormSection } from '@/components/UI/FormSection';
import { Stack } from '@/components/UI/Stack';
import { useEffect, useState } from 'react';
import { SecondTitle } from '@/components/UI/SecondTitle';
import { cn } from '@/utils/cn';

const userDetailsSchema = z
	.object({
		firstName: z
			.string()
			.min(2, 'First name must be at least 2 characters'),
		lastName: z.string().min(2, 'Last name must be at least 2 characters'),
		login: z.string().min(3, 'Login must be at least 3 characters'),
		email: z.string().email('Invalid email address'),
		phone: z.string().min(9, 'Phone number must be at least 9 digits'),
		street: z.string().optional(),
		city: z.string().optional(),
		postalCode: z
			.string()
			.regex(/^\d{2}-\d{3}$/, 'Invalid postal code format (e.g., 00-000)')
			.optional()
			.or(z.literal('')),
		country: z.string().optional(),
		newPassword: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.optional()
			.or(z.literal('')),
		confirmPassword: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.optional()
			.or(z.literal('')),
	})
	.refine(
		(data) => {
			if (data.newPassword && data.newPassword !== data.confirmPassword) {
				return false;
			}
			return true;
		},
		{
			message: 'Passwords do not match',
			path: ['confirmPassword'],
		}
	);

export type UserDetailsFormValues = z.infer<typeof userDetailsSchema>;

interface UserData {
	firstName: string;
	lastName: string;
	login: string;
	email: string;
	phone?: string;
	street?: string;
	city?: string;
	postalCode?: string;
	country?: string;
}

interface DetailsAccountProps {
	userData?: UserData;
}

export function DetailsAccount({ userData }: DetailsAccountProps) {
	const form = useForm<UserDetailsFormValues>({
		resolver: zodResolver(userDetailsSchema),
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			lastName: '',
			login: '',
			email: '',
			phone: '',
			street: '',
			city: '',
			postalCode: '',
			country: '',
			newPassword: '',
			confirmPassword: '',
		},
	});

	useEffect(() => {
		if (userData) {
			form.reset({
				firstName: userData.firstName || '',
				lastName: userData.lastName || '',
				login: userData.login || '',
				email: userData.email || '',
				phone: userData.phone || '',
				street: userData.street || '',
				city: userData.city || '',
				postalCode: userData.postalCode || '',
				country: userData.country || '',
				newPassword: '',
				confirmPassword: '',
			});
		}
	}, [userData, form]);

	const onSubmit = () => {
		console.log('potwierdz');
	};

	enum TabItems {
		CHANGE_EMAIL = 'Change email',
		CHANGE_PASSWORD = 'Change password',
		CHANGE_PHONE_NUMBER = 'Change phone number',
	}

	const tabItems = [
		TabItems.CHANGE_EMAIL,
		TabItems.CHANGE_PASSWORD,
		TabItems.CHANGE_PHONE_NUMBER,
	];
	const [isActive, setActive] = useState<TabItems>(TabItems.CHANGE_EMAIL);

	return (
		<>
			<Stack
				direction='row'
				className='w-full rounded-t-xl max-w-xl mt-12 z-20'>
				{tabItems.map((tab) => (
					<div
						key={tab}
						data-isactive={isActive === tab}
						onClick={() => setActive(tab)}
						className={cn(
							'flex-1 text-center cursor-pointer p-2 transition-all rounded-t-xl shadow-inner',
							isActive === tab
								? 'bg-gradient-to-l from-pink-700 to-pink-800 hover:brightness-110 shadow-md text-white'
								: 'bg-gradient-to-l from-pink-100 to-pink-200 hover:brightness-103 hover:text-pink-700 text-pink-800'
						)}>
						{tab}
					</div>
				))}
			</Stack>
			<FormProvider {...form}>
				<FormSection
					onSubmit={onSubmit}
					isSubmitting={form.formState.isSubmitting}
					isValid={form.formState.isValid}
					className='mb-18'>
					{isActive === TabItems.CHANGE_EMAIL && (
						<>
							<SecondTitle title='Change Email' />
							<Stack
								direction={{ base: 'col', md: 'row' }}
								spacing={4}>
								<FormField name='email' placeholder='Email' />
								<FormField
									name='confirmPassword'
									placeholder='Confirm Password'
									type='password'
								/>
							</Stack>
						</>
					)}

					{isActive === TabItems.CHANGE_PHONE_NUMBER && (
						<>
							<SecondTitle title='Change Phone Number' />
							<Stack
								direction={{ base: 'col', md: 'row' }}
								spacing={4}>
								<FormField
									name='phone'
									placeholder='Phone Number'
								/>
								<FormField
									name='confirmPassword'
									placeholder='Confirm Password'
									type='password'
								/>
							</Stack>
						</>
					)}

					{isActive === TabItems.CHANGE_PASSWORD && (
						<>
							<SecondTitle title='Change Password' />
							<Stack
								direction={{ base: 'col', md: 'row' }}
								spacing={4}>
								<FormField
									name='newPassword'
									placeholder='New Password'
									type='password'
								/>
								<FormField
									name='confirmPassword'
									placeholder='Confirm Password'
									type='password'
								/>
							</Stack>
						</>
					)}
				</FormSection>
			</FormProvider>
		</>
	);
}
