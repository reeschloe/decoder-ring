const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    describe("shift is set to an acceptable number", () => {
        it("should return false if shift isn't set", () => {
            let shift;
            const actual = caesar("test", shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is 0", () => {
            let shift = 0;
            const actual = caesar("test", shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is greater than 25", () => {
            let shift = 26;
            const actual = caesar("test", shift);
            expect(actual).to.be.false;
        })
        it("should return false if shift is less than -25", () => {
            let shift = -26;
            const actual = caesar("test", shift);
            expect(actual).to.be.false;
        })
    })
    describe("encodes correctly", () => {
        it("should shift message", () => {
            const shift = 3;
            const message = "message";
            const actual = caesar(message, shift);
            const expected = "phvvdjh";
            expect(actual).to.equal(expected);
        })
        it("should treat capital and lowercase the same", () => {
            const shift = 3;
            const message = "Message";
            const actual = caesar(message, shift);
            const expected = "phvvdjh";
            expect(actual).to.equal(expected);
        })
        it("should shift backward if shift is negative", () => {
            const shift = -3;
            const message = "message";
            const actual = caesar(message, shift);
            const expected = "jbppxdb";
            expect(actual).to.equal(expected);
        })
        it("should handle letters at end of alphabet", () => {
            const shift = 3;
            const message = "zyxabc";
            const actual = caesar(message, shift);
            const expected = "cbadef"
            expect(actual).to.equal(expected);
        })
    })
    describe("decodes correctly", () => {
        it("should shift message backward", () => {
            const shift = 3;
            const message = "message";
            const actual = caesar(message, shift, false);
            const expected = "jbppxdb";
            expect(actual).to.equal(expected);
        })
        it("should treat capital and lowercase the same", () => {
            const shift = 3;
            const message = "Message";
            const actual = caesar(message, shift, false);
            const expected = "jbppxdb";
            expect(actual).to.equal(expected);
        })
        it("should shift backward if shift is negative", () => {
            const shift = -3;
            const message = "message";
            const actual = caesar(message, shift, false);
            const expected = "phvvdjh";
            expect(actual).to.equal(expected);
        })
        it("should handle letters at beginning of alphabet", () => {
            const shift = 3;
            const message = "zyxabc";
            const actual = caesar(message, shift, false);
            const expected = "wvuxyz"
            expect(actual).to.equal(expected);
        })
    })
})