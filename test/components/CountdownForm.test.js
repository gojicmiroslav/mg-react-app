import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import CountdownForm from '../../app/components/CountdownForm';

describe('CountdownForm', () => {
	it("should exist", () => {
		expect(CountdownForm).to.exist;
	});

	describe('onSetCountdown', () => {
		let spy, countdownForm, $el;

		beforeEach(() => {
			spy = sinon.spy();
			countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			$el = $(ReactDOM.findDOMNode(countdownForm));
		});

		it('should call onSetCountdown if valid seconds entered', () => {
			countdownForm.refs.seconds.value = '110';
			TestUtils.Simulate.submit($el.find("form")[0]);
			expect(spy).have.been.calledWith(110);
		});

		it('should not call onSetCountdown if invalid seconds entered', () => {			
			countdownForm.refs.seconds.value = '110aa';
			TestUtils.Simulate.submit($el.find("form")[0]);
			expect(spy).not.have.been.called;
		});
	});	
});