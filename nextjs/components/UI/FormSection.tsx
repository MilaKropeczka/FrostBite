import type { FormEventHandler } from 'react';
import { SecondTitle } from '@/components/UI/SecondTitle';
import { Button } from '@/components/UI/Button';

type FormSectionProps = {
	title?: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
	isSubmitting: boolean;
	isValid: boolean;
	children: React.ReactNode;
	className?: string;
	submitLabel?: string;
	submittingLabel?: string;
};

export function FormSection({
	title,
	onSubmit,
	isSubmitting,
	isValid,
	children,
	className,
	submitLabel = 'Save',
	submittingLabel = 'Saving...',
}: FormSectionProps) {
	return (
		<section className={`w-full max-w-2xl ${className}`}>
			{title && <SecondTitle title={title} />}
			<div className='bg-white/80 shadow-lg p-6 rounded-xl'>
				<form
					noValidate
					className='flex flex-col gap-2'
					onSubmit={(e) => {
						e.preventDefault();
						onSubmit(e);
					}}>
					{children}
					<Button
						type='submit'
						className='font-semibold py-3'
						disabled={!isValid || isSubmitting}>
						{isSubmitting ? submittingLabel : submitLabel}
					</Button>
				</form>
			</div>
		</section>
	);
}
