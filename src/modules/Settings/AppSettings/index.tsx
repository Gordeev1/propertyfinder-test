import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { translate } from '@i18n';
import Card from '@components/Card';
import SegmentedControl from '@components/SegmentedControl';
import { THEME } from '@modules/Theme/enums';
import AppSettingsItem from '@modules/Settings/AppSettingsItem';
import { useThemeName } from '@hooks/useThemeName';
import { Title } from './styled';

const themeToogleItems = Object.values(THEME);

const appVersion = DeviceInfo.getVersion();

export default () => {
	const [theme, changeTheme] = useThemeName();
	return (
		<>
			<Title>{translate('settings.appSettings.title')}</Title>
			<Card>
				<AppSettingsItem label={translate('settings.appSettings.theme')}>
					<SegmentedControl<THEME>
						items={themeToogleItems}
						value={theme}
						onChange={changeTheme}
					/>
				</AppSettingsItem>
				<AppSettingsItem
					label={translate('settings.appSettings.appVersion')}
					value={appVersion}
				/>
			</Card>
		</>
	);
};
