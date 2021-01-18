const getLocales = () => [
	{ countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
	{ countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false },
];

const findBestAvailableLanguage = () => ({
	languageTag: 'en-US',
	isRTL: false,
});

const getNumberFormatSettings = () => ({
	decimalSeparator: '.',
	groupingSeparator: ',',
});

const getCalendar = () => 'gregorian';
const getCountry = () => 'US';
const getCurrencies = () => ['USD', 'EUR'];
const getTemperatureUnit = () => 'celsius';
const getTimeZone = () => 'Europe/Paris';
const uses24HourClock = () => true;
const usesMetricSystem = () => true;

const addEventListener = jest.fn();
const removeEventListener = jest.fn();

export {
	findBestAvailableLanguage,
	getLocales,
	getNumberFormatSettings,
	getCalendar,
	getCountry,
	getCurrencies,
	getTemperatureUnit,
	getTimeZone,
	uses24HourClock,
	usesMetricSystem,
	addEventListener,
	removeEventListener,
};
