import { expect } from "chai";
import { Padlr } from "../src/index";

describe("Padlr tests", () => {
    const str = "Hello World";

    it("should left pad a string", () => {
        const actual = Padlr.left(str, 15)
        const expected = "    Hello World";

        expect(actual).to.equal(expected);
    });

    it("should right pad a string", () => {
        const actual = Padlr.right(str, 15, "-");
        const expected = "Hello World----";

        expect(actual).to.equal(expected);
    });

    it("should handle edge cases", () => {
        let str, actual, expected;

        str = "Hi there!";

        actual = Padlr.right(str, 2)
        expected = "Hi there!";
        expect(actual).to.equal(expected);

        actual = Padlr.right(str, -5)
        expect(actual).to.equal(expected);

        actual = Padlr.right(str, 15, ".");
        expected = "Hi there!......";
        expect(actual).to.equal(expected);

        str = "ABCDEFG";

        actual = Padlr.left(str, 10, "+");
        expected = "+++ABCDEFG";
        expect(actual).to.equal(expected);

        actual = Padlr.right(str, 10, "+");
        expected = "ABCDEFG+++";
        expect(actual).to.equal(expected);

        actual = Padlr.right(str, 10);
        expected = "ABCDEFG   ";
        expect(actual).to.equal(expected);

        str = "123";

        actual = Padlr.left(str, 2, "+");
        expected = "123";
        expect(actual).to.equal(expected);

        actual = Padlr.right(str, -2, "+");
        expect(actual).to.equal(expected);
    });
});