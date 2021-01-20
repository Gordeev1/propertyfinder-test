import { useState, useCallback } from 'react';

type Action = () => void;

export function useToogleState(initialState = false) {
	const [value, setValue] = useState(initialState);

	const enable = useCallback(() => setValue(true), [setValue]);
	const disable = useCallback(() => setValue(false), [setValue]);
	const toogle = useCallback(() => setValue(!value), [setValue, value]);

	return [value, enable, disable, toogle] as [boolean, Action, Action, Action];
}
