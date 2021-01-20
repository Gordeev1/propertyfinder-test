import { NavigationContainerRef } from '@react-navigation/native';

class NavigationService {
	navigation?: NavigationContainerRef;

	setNavigation = (navigation: NavigationContainerRef) => {
		if (!navigation) {
			return;
		}
		this.navigation = navigation;
	};

	pop = () => this.navigation && this.navigation.canGoBack() && this.navigation.goBack();
}

export default new NavigationService();
