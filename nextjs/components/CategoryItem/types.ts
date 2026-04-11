import type { ComponentType } from 'react';

type CategoryIconComponent = ComponentType<{
	size?: number;
	className?: string;
}>;

export interface CategoryItemProps {
	title: string;
	Icon: CategoryIconComponent;
}
