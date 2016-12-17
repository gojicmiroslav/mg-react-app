import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Todo from '../../app/components/Todo';

describe('Todo', () => {
	it("should exist", () => {
		expect(Todo).to.exist;
	});
});