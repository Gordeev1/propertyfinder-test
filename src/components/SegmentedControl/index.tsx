import React, { useCallback } from 'react';
import { ConfiguredSegmentedControlBase } from './styled';
interface IProps<T> {
	items: T[];
	value: T;
	onChange: (value: T) => void;
	disabled?: boolean;
}

export default function SegmentedControl<T extends string>({
	value,
	onChange,
	items,
	disabled,
}: IProps<T>) {
	/* eslint-disable-next-line react-hooks/exhaustive-deps */
	const handleChange = useCallback((nextValue: string) => onChange(nextValue as T), [onChange]);

	return (
		<ConfiguredSegmentedControlBase
			enabled={!disabled}
			values={items}
			selectedIndex={items.indexOf(value)}
			onValueChange={handleChange}
		/>
	);
}
