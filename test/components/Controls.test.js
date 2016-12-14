import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'

import Controls from '../../app/components/Controls';

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).to.exist;
	});

	describe('render', () => {
		it('should render pause button when started', () => {
			let controls = TestUtils.renderIntoDocument(<Controls 
															countdownStatus={status.STARTED} />);
			let $el = $(ReactDOM.findDOMNode(controls));
			let $pauseButton = $el.find('button:contains(Pause)');			
			expect($pauseButton.length).to.equal(1);
		});

		it('should render start button when paused', () => {
			let controls = TestUtils.renderIntoDocument(<Controls 
															countdownStatus={status.PAUSED} />);
			let $el = $(ReactDOM.findDOMNode(controls));
			let $startButton = $el.find('button:contains(Start)');			
			expect($startButton.length).to.equal(1);
		});
	});
});