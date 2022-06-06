const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("handle incorrect alphabet entries", () => {
        it("should return false if alphabet not 26 characters", () => {
            const input = "message"
            const alphabet = "asdfghjkl1234";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if alphabet not unique characters", () => {
            const input = "message"
            const alphabet = "asdfghjkl1234aertyuiopcvbnm";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
    })
    describe("encodes correctly", () => {
        it("should correctly encode input", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        })
        it("should correctly encode input with spaces", () => {
            const input = "you are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters when encoding", () => {
            const input = "Thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        })
    })
    describe("decodes correctly", () => {
        it("should correctly decode input", () => {
            const input = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters when decoding", () => {
            const input = "Y&ii$R&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet, false);
            const expected = "message";
            expect(actual).to.equal(expected);
        })
    })
})