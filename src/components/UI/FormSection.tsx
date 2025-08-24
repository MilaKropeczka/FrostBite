import { SecondTitle } from '@/components/UI/SecondTitle';
import { Button } from '@/components/UI/Button';

type FormSectionProps = {
	title?: string;
	onSubmit: () => void;
	isSubmitting: boolean;
	isValid: boolean;
	children: React.ReactNode;
	className?: string;
};

export function FormSection({
	title,
	onSubmit,
	isSubmitting,
	isValid,
	children,
	className,
}: FormSectionProps) {
	return (
		<section className={`w-full max-w-2xl ${className}`}>
			{title && <SecondTitle title={title} />}
			<div className='bg-white/80 shadow-lg p-6 rounded-xl'>
				<form onSubmit={onSubmit} className='flex flex-col gap-2'>
					{children}
					<Button
						type='submit'
						className='font-semibold py-3'
						disabled={!isValid || isSubmitting}>
						{isSubmitting ? 'Saving...' : 'Save'}
					</Button>
				</form>
			</div>
		</section>
	);
}
