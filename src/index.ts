export class Padlr {
    static left(str: string, n: number, padStr=" ") {
        let times = n - str.length;
        let newStr = "";

        while (times-- > 0) {
            newStr += padStr;
        }

        newStr += str;

        return newStr;
    }

    static right(str: string, n: number, padStr=" ") {
        let times = n - str.length;
        let newStr = str;

        while (times-- > 0) {
            newStr += padStr;
        }

        return newStr;
    }
}
