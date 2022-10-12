describe('Homepage route', () => {

	describe('Homepage route feature flag ON', () => {
		let request;

		beforeAll(() => {
			jest.mock('../feature-flags', () => {
				return {
					setFeatureFlags: (_request, response, next) => {
						response.locals.featureFlags = require('../feature-flags.json').response;
						// Overrides the mocked one.
						response.locals.featureFlags = Object.assign(response.locals.featureFlags, {
							// Set the feature flag to true
							showNewNotRecognisedJourney: true
						});
						next();
					}
				};
			});
		});

		it('Serves the page with a 200 in best case', () => {
			return request.get('/home')
				.send()
				.expect(200);
		});
	});

	describe('Homepage route feature flag OFF', () => {
		let request;

		beforeAll(() => {
			jest.mock('../feature-flags', () => {
				return {
					setFeatureFlags: (_request, response, next) => {
						response.locals.featureFlags = require('../feature-flags.json').response;
						// Overrides the mocked one.
						response.locals.featureFlags = Object.assign(response.locals.featureFlags, {
							// Set the feature flag to false
							showNewNotRecognisedJourney: false
						});
						next();
					}
				};
			});
		});

		it('Serves the page with a 200 in best case', () => {
			return request.get('/home')
				.send()
				.expect(200);
		});
	});

});