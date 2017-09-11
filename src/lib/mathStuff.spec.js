/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const { addNumbers } = require('./mathStuff');

describe('Math Stuff', () => {
    describe('addNumbers', () => {
        it('Should have the correct sum', () => {
            const sum = addNumbers(3, 8);
            expect(sum).to.equal(11);
        });
    });
});
