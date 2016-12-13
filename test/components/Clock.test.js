import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';

import Clock from '../../app/components/Clock';

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).to.exist;
	});

	describe('render', () => {
		let clock;

		beforeEach(() => {
			clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
		});

		it('should render clock to output', () => {
			let $el = $(ReactDOM.findDOMNode(clock));
			let actualText = $el.find('.clock-text').text();

			expect(actualText).to.equal('01:02'); 
		});
	});

	describe('formatSeconds', () => {
		let clock;

		beforeEach(() => {
			clock = TestUtils.renderIntoDocument(<Clock/>);
		});

		it('should format seconds', () => {
			let seconds = 615; //10:15
			let expected = '10:15';
			let actual = clock.formatSeconds(seconds);

			expect(actual).to.equal(expected);
		});

		it('should format seconds when min/sec are less than 10', () => {
			let seconds = 61; 
			let expected = '01:01';
			let actual = clock.formatSeconds(seconds);

			expect(actual).to.equal(expected);
		});
	});
});