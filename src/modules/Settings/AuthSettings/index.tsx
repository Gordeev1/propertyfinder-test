import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '@components/Button';
import { translate } from '@i18n';
import {
	selectUserAuthorized,
	selectUserAuthorization,
	authorize,
	actions as userActions,
} from '@store/slices/user';
import { Container, Title, Description } from './styled';

export default () => {
	const authorized = useSelector(selectUserAuthorized);
	const authorization = useSelector(selectUserAuthorization);

	const dispatch = useDispatch();

	const _authorize = useCallback(() => dispatch(authorize()), [dispatch]);
	const logout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

	return (
		<Container>
			{authorized ? (
				<>
					<Title>{translate('settings.authSettings.titleAuthorized')}</Title>
					<PrimaryButton
						title={translate('settings.authSettings.logoutActionBtnLabel')}
						onPress={logout}
					/>
				</>
			) : (
				<>
					<Title>{translate('settings.authSettings.title')}</Title>
					<Description>{translate('settings.authSettings.description')}</Description>
					<PrimaryButton
						title={translate('settings.authSettings.authActionBtnLabel')}
						loading={authorization}
						disabled={authorization}
						onPress={_authorize}
					/>
				</>
			)}
		</Container>
	);
};
