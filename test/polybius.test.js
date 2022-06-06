const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("encodes correctly", () => {
        it("should translate i and j to 42", () => {
            const message = "jingle";
            const actual = polybius(message);
            const expected = "424233221351";
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const message = "Message";
            const actual = polybius(message);
            const expected = "23513434112251";
            expect(actual).to.equal(expected);
        })
        it("should keep spaces in place", () => {
            const message = "space test";
            const actual = polybius(message);
            const expected = "3453113151 44513444";
            expect(actual).to.equal(expected);
        })
    })
    describe("decodes correctly", () => {
         it("should return false if odd number of digits without spaces", () => {
            const message = "2351343411225";
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        }) 
        it("should translate 42 to (i/j)", () => {
            const message = "424233221351";
            const actual = polybius(message, false);
            const expected = "(i/j)(i/j)ngle";
            expect(actual).to.equal(expected);
        })
        it("should keep spaces in place", () => {
            const message = "3453113151 44513444";
            const actual = polybius(message, false);
            const expected = "space test";
            expect(actual).to.equal(expected);
        })
    })
})
