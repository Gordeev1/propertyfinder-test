import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export function useWindowSize() {
	const [size, setSize] = useState(Dimensions.get('window'));

	const onChange = useCallback(
		({ window }: { window: ScaledSize; screen: ScaledSize }) => setSize(window),
		[setSize],
	);

	useEffect(() => {
		Dimensions.addEventListener('change', onChange);
		return () => Dimensions.removeEventListener('change', onChange);
	}, [onChange]);

	return size;
}
