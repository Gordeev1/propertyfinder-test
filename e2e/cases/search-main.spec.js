const { timeouts } = require('../utils');

describe('Search main', () => {
	beforeEach(async () => {
		await device.launchApp({ newInstance: true });
	});

	const loadTimeout = timeouts.ONE_SEC;

	it('Show at least one movie by right query', async () => {
		await element(by.id('searchMain.input')).typeText('Batman');
		await waitFor(element(by.id('searchMain.searchMainListItem-1')))
			.toBeVisible()
			.withTimeout(loadTimeout);
	});

	it('Show not found note if wrong query', async () => {
		await element(by.id('searchMain.input')).typeText('+_+');
		await waitFor(element(by.id('searchMain.noResultsFoundNote')))
			.toBeVisible()
			.withTimeout(loadTimeout);
	});

	describe('results', () => {
		beforeEach(async () => {
			await element(by.id('searchMain.input')).typeText('Batman');
			await waitFor(element(by.id('searchMain.searchMainListItem-1')))
				.toBeVisible()
				.withTimeout(loadTimeout);
		});

		it('Open movie details screen on tap', async () => {
			await element(by.id('searchMain.searchMainListItem-1')).tap();

			await expect(element(by.id('movieDetails.scrollView'))).toBeVisible();
		});

		it('Clear results when input clear', async () => {
			await element(by.id('searchMain.input')).clearText();

			await expect(element(by.id('searchMain.searchMainListItem-1'))).not.toBeVisible();
		});
	});
});
