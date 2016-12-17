import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Timer from '../../app/components/Timer';

describe("Timer", () => {
	it('should exists', () => {
		expect(Timer).to.exist;
	});

	describe('handleSetTimer', () => {
		let timer;

		beforeEach(() => {
			timer = TestUtils.renderIntoDocument(<Timer />);
		});

		it('should start timer on started status', (done) => {
			timer.handleStatusChange(status.STARTED);
			expect(timer.state.count).to.equal(0);

			setTimeout(() => {
				expect(timer.state.timerStatus).to.equal(status.STARTED);
				expect(timer.state.count).to.equal(1);
				done();
			}, 1001);
		});

		it('should pause timer on paused status', (done) => {
			timer.setState({ count: 10 });
			timer.handleStatusChange(status.STARTED);
			timer.handleStatusChange(status.PAUSED);
			expect(timer.state.count).to.equal(10);

			setTimeout(() => {
				expect(timer.state.timerStatus).to.equal(status.PAUSED);
				expect(timer.state.count).to.equal(10);
				done();
			}, 1001);
		});

		it('should clear count on stopped status', (done) => {
			timer.setState({ count: 10 });
			timer.handleStatusChange(status.STARTED);
			timer.handleStatusChange(status.STOPPED);

			setTimeout(() => {
				expect(timer.state.timerStatus).to.equal(status.STOPPED);
				expect(timer.state.count).to.equal(0);
				done();
			}, 1001);
		});
	});
});