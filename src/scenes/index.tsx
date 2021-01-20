import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Host } from 'react-native-portalize';
import { translate } from '@i18n';
import { selectUserAuthorized } from '@store/slices/user';
import { SearchStackScreen } from '@scenes/search';
import SettingsScreen from '@scenes/Settings';
import ProfileScreen from '@scenes/Profile';
import NavigationService from '@services/navigation';
import styled from '@utils/styled-components';
import { MAIN_TABS } from './enums';

interface ITabBarIconProps {
	focused: boolean;
	color: string;
	size: number;
}

const Tabs = createBottomTabNavigator();

const ConfiguredTabsNavigator = styled(Tabs.Navigator).attrs((p) => ({
	sceneContainerStyle: { backgroundColor: p.theme.colors.background },
	tabBarOptions: {
		activeTintColor: p.theme.colors.activeTint,
		inactiveTintColor: p.theme.colors.inactiveTint,
		style: {
			backgroundColor: p.theme.colors.tabBar,
			borderTopColor: p.theme.colors.tabBarBorder,
		},
	},
}))``;

export default () => {
	const authorized = useSelector(selectUserAuthorized);

	const searchTabOptions = useMemo(
		() => ({
			tabBarIcon: (props: ITabBarIconProps) => <Icon {...props} name="search" />,
			tabBarLabel: translate('tabs.search'),
			tabBarTestID: 'tabbar.search-main',
		}),
		[],
	);

	const settingsTabOptions = useMemo(
		() => ({
			tabBarIcon: (props: ITabBarIconProps) => <Icon {...props} name="settings" />,
			tabBarLabel: translate('tabs.settings'),
			tabBarTestID: 'tabbar.settings',
		}),
		[],
	);

	const profileTabOptions = useMemo(
		() => ({
			tabBarIcon: (props: ITabBarIconProps) => <Icon {...props} name="account-circle" />,
			tabBarLabel: translate('tabs.profile'),
			tabBarTestID: 'tabbar.profile',
		}),
		[],
	);

	return (
		<NavigationContainer ref={NavigationService.setNavigation}>
			<Host>
				<ConfiguredTabsNavigator>
					<Tabs.Screen
						name={MAIN_TABS.Search}
						component={SearchStackScreen}
						options={searchTabOptions}
					/>

					<Tabs.Screen
						name={MAIN_TABS.Settings}
						component={SettingsScreen}
						options={settingsTabOptions}
					/>
					{authorized && (
						<Tabs.Screen
							name={MAIN_TABS.Profile}
							component={ProfileScreen}
							options={profileTabOptions}
						/>
					)}
				</ConfiguredTabsNavigator>
			</Host>
		</NavigationContainer>
	);
};
