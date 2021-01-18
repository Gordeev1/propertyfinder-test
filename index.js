import { AppRegistry, UIManager, Text, TextInput } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './src';
import { name as appName } from './app.json';

enableScreens();

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

if (!Text.defaultProps) {
	Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;

if (!TextInput.defaultProps) {
	TextInput.defaultProps = {};
}
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
