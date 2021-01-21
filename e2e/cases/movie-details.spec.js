const { timeouts } = require('../utils');

describe('Moview details', () => {
	const loadTimeout = timeouts.ONE_SEC;

	beforeEach(async () => {
		await device.launchApp({ newInstance: true });
		await element(by.id('searchMain.input')).typeText('Batman begins');
		await waitFor(element(by.id('searchMain.searchMainListItem-1')))
			.toBeVisible()
			.withTimeout(loadTimeout);
		await element(by.id('searchMain.searchMainListItem-1')).tap();
	});

	it('Open website on button press', async () => {
		await element(by.id('movieDetails.openWebsiteBtn')).tap();
		await expect(element(by.id('movieDetails.webview'))).toBeVisible();
	});
});
