import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Countdown from '../../app/components/Countdown';

describe("Countdown", () => {
	it("should exist", () => {
		expect(Countdown).to.exist;
	});

	describe("handleSetCountdown", () => {
		const status = {
			STOPPED: 'stopped',
			STARTED: 'started'
		};

		let countdown;

		beforeEach(() => {
			countdown = TestUtils.renderIntoDocument(<Countdown/>);	
		});

		it("should set state to started and countdown", (done) => {
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).to.equal(10);
			expect(countdown.state.status).to.equal(status.STARTED);

			// after a one second state.count should be 9
			setTimeout(() => {
				expect(countdown.state.count).to.equal(7);
				done();
			},3001);
		});

		it("should never set count less than zero", (done) => {
			countdown.handleSetCountdown(1);

			setTimeout(() => {
				expect(countdown.state.count).to.equal(0);
				done();
			},2001);
		});
	});
});