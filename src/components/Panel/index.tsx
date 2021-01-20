import React, { memo, useRef, useEffect, useCallback, PropsWithChildren } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import { IProps as IModalizeProps } from 'react-native-modalize/lib/options';

export interface IPanelProps extends IModalizeProps {
	isVisible: boolean;
}

export default memo(({ isVisible, children, ...props }: PropsWithChildren<IPanelProps>) => {
	const modalRef = useRef<Modalize>(null);

	useEffect(() => {
		if (modalRef.current) {
			if (isVisible) {
				modalRef.current.open();
			}

			if (!isVisible) {
				modalRef.current.close();
			}
		}
	}, [isVisible]);

	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => isVisible;
			BackHandler.addEventListener('hardwareBackPress', onBackPress);
			return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, [isVisible]),
	);

	return (
		<Portal>
			<Modalize ref={modalRef} {...props}>
				{isVisible && children}
			</Modalize>
		</Portal>
	);
});
