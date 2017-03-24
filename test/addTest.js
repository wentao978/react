import add from '../src/add';
import { expect } from 'chai';

describe('add unit test.', function() {
	it('2 + 3 = 5', function() {
		var result = add(2, 3);
		expect(result).to.equal(5);
	})
})