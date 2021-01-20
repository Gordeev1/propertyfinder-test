import { useCallback } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserThemePreference, actions as userActions } from '@store/slices/user';
import { THEME } from '@modules/Theme/enums';

const mapDeviceColorSchemeToSupportedTheme = (scheme: ColorSchemeName): THEME | undefined => {
	switch (scheme) {
		case 'light':
			return THEME.Light;
		case 'dark':
			return THEME.Dark;
	}
};

export const useThemeName = (
	defaultTheme = THEME.Light,
): [THEME, (theme: THEME | null) => void] => {
	const dispatch = useDispatch();
	const changeTheme = useCallback(
		(theme: THEME | null) => dispatch(userActions.setTheme(theme)),
		[dispatch],
	);

	const deviceColorScheme = useColorScheme();
	const deviceBasedTheme = mapDeviceColorSchemeToSupportedTheme(deviceColorScheme);
	const userBasedTheme = useSelector(selectUserThemePreference);

	const themeName = userBasedTheme || deviceBasedTheme || defaultTheme;

	return [themeName, changeTheme];
};
