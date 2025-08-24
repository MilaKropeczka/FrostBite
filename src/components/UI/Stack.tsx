import * as React from 'react';
import { cn } from '@/utils/cn';

type BP = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Responsive<T> = T | ({ base?: T } & Partial<Record<BP, T>>);

type Dir = 'row' | 'col';
type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';
type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10;

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
	direction?: Responsive<Dir>;
	spacing?: Responsive<Spacing>;
	align?: Responsive<Align>;
	justify?: Responsive<Justify>;
	wrap?: Responsive<boolean>;
}

const dirMap: Record<Dir, string> = { row: 'flex-row', col: 'flex-col' };
const alignMap: Record<Align, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
};
const justifyMap: Record<Justify, string> = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
};
const gapMap: Record<Spacing, string> = {
	0: 'gap-0',
	1: 'gap-1',
	2: 'gap-2',
	3: 'gap-3',
	4: 'gap-4',
	5: 'gap-5',
	6: 'gap-6',
	8: 'gap-8',
	10: 'gap-10',
};

const order: BP[] = ['sm', 'md', 'lg', 'xl', '2xl'];

function applyResponsive<T>(
	value: Responsive<T> | undefined,
	mapper: (v: T) => string
): string[] {
	if (value === undefined) return [];
	if (typeof value !== 'object') return [mapper(value as T)];
	const v = value as { base?: T } & Partial<Record<BP, T>>;
	const out: string[] = [];
	if (v.base !== undefined) out.push(mapper(v.base));
	for (const bp of order) {
		const x = v[bp];
		if (x !== undefined) out.push(`${bp}:${mapper(x)}`);
	}
	return out;
}

export function Stack({
	direction = 'col',
	spacing = 2,
	align = 'stretch',
	justify = 'start',
	wrap = false,
	className,
	children,
	...props
}: StackProps) {
	const classes = cn(
		'flex',
		...applyResponsive(direction, (v) => dirMap[v]),
		...applyResponsive(align, (v) => alignMap[v]),
		...applyResponsive(justify, (v) => justifyMap[v]),
		...applyResponsive(spacing, (v) => gapMap[v]),
		...applyResponsive(wrap, (v) => (v ? 'flex-wrap' : 'flex-nowrap')),
		className
	);

	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
}
