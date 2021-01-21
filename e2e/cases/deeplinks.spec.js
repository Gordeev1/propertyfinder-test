const { timeouts } = require('../utils');

describe('Deeplinks', () => {
	beforeEach(() => {
		device.terminateApp();
	});

	it('Open app by scheme', async () => {
		await device.launchApp({ newInstance: true, url: 'pftest://' });
		await expect(element(by.id('tabbar.search-main'))).toBeVisible();
	});

	it('Open settings screen ', async () => {
		await device.launchApp({ newInstance: true, url: 'pftest://settings' });
		await expect(element(by.id('settings.sceneTitleSection'))).toBeVisible();
	});

	describe('Movies', () => {
		it('Open movie details screen if movie ID right', async () => {
			await device.launchApp({ newInstance: true, url: 'pftest://movies/123' });
			await expect(element(by.id('movieDetails.scrollView'))).toBeVisible();
		});

		it('Show warning alert if movie ID wrong', async () => {
			await device.launchApp({ newInstance: true, url: 'pftest://movies/aaaa' });
			await expect(
				element(by.text('Sorry, we unable to find info about this movie')),
			).toBeVisible();
		});
	});

	describe('Profile', () => {
		beforeEach(async () => {
			await device.launchApp({ newInstance: true, delete: true });
		});

		const authTimeout = timeouts.TWO_SEC + timeouts.HALF_SEC;

		it('Open profile if user authorized', async () => {
			await element(by.id('tabbar.settings')).tap();
			await element(by.id('settings.authBtn')).tap();
			await waitFor(element(by.id('tabbar.profile')))
				.toBeVisible()
				.withTimeout(authTimeout);

			await device.launchApp({ newInstance: true, url: 'pftest://profile' });

			await expect(element(by.id('profile.sceneTitleSection'))).toBeVisible();
		});

		it("Doesn't open profile screen if user not authorized", async () => {
			await device.launchApp({ newInstance: true, url: 'pftest://profile' });
			await expect(element(by.id('profile.sceneTitleSection'))).not.toBeVisible();
		});
	});
});
