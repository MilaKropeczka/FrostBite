import { cn } from '@/utils/cn';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
	direction?: 'row' | 'col';
	spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;
	align?: 'start' | 'center' | 'end' | 'stretch';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around';
	wrap?: boolean;
}

export const Stack = ({
	direction = 'col',
	spacing = 2,
	align = 'stretch',
	justify = 'start',
	wrap = false,
	className,
	children,
	...props
}: StackProps) => {
	return (
		<div
			className={cn(
				'flex',
				direction === 'row' ? 'flex-row' : 'flex-col',
				`items-${align}`,
				`justify-${justify}`,
				`gap-${spacing}`,
				wrap && 'flex-wrap',
				className
			)}
			{...props}>
			{children}
		</div>
	);
};
