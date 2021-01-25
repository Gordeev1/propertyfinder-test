const { timeouts } = require('../utils');

describe('Auth', () => {
	const authTimeout = timeouts.TWO_SEC + timeouts.HALF_SEC;

	beforeEach(async () => {
		await device.launchApp({ newInstance: true, delete: true });
		await element(by.id('tabbar.settings')).tap();
	});

	it('Set auth state when "Authorize" button press at settings screen', async () => {
		await element(by.id('settings.authBtn')).tap();

		await waitFor(element(by.id('tabbar.profile')))
			.toBeVisible()
			.withTimeout(authTimeout);
	});

	describe('authorized', () => {
		beforeEach(async () => {
			await element(by.id('settings.authBtn')).tap();
			await waitFor(element(by.id('tabbar.profile')))
				.toBeVisible()
				.withTimeout(authTimeout);
		});

		it('Persist auth state after app reload', async () => {
			await device.launchApp({ newInstance: true });

			await expect(element(by.id('tabbar.profile'))).toBeVisible();
		});

		it('Reset auth state when "Logout" button press on settings screen', async () => {
			await element(by.id('settings.logoutBtn')).tap();

			await expect(element(by.id('tabbar.profile'))).not.toBeVisible();
		});
	});
});
