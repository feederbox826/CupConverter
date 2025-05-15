const cupConverter = require('./cupConverter.js');
const cupConverterMin = require('./cupConverter.min.js');

// Metric to Imperial
test("should convert 1cm successfully", () => {
    expect(cupConverter.cmToIn(1)).toBe(0);
})

test("should convert larger metric values successfully", () => {
    expect(cupConverter.cmToIn(30)).toBe(12);
})

// Lookup cup sizes
test("Should return AA for bustDiffIn < 1", () => {
    expect(cupConverter.USCup(0)).toBe('AA');
    expect(cupConverter.USCup(-1)).toBe('AA');
    expect(cupConverter.USCup(0.9)).toBe('AA');
})

test("Should return correct letter for bustDiffIn >= 1", () => {
    expect(cupConverter.USCup(1)).toBe('A');
    expect(cupConverter.USCup(2)).toBe('B');
    expect(cupConverter.USCup(3)).toBe('C');
    expect(cupConverter.USCup(4)).toBe('D');
    expect(cupConverter.USCup(5)).toBe('E');
    expect(cupConverter.USCup(6)).toBe('F');
    expect(cupConverter.USCup(7)).toBe('G');
    expect(cupConverter.USCup(8)).toBe('H');
    expect(cupConverter.USCup(9)).toBe('I');
    expect(cupConverter.USCup(10)).toBe('J');
    expect(cupConverter.USCup(11)).toBe('K');
    expect(cupConverter.USCup(12)).toBe('L');
    expect(cupConverter.USCup(13)).toBe('M');
    expect(cupConverter.USCup(14)).toBe('N');
    expect(cupConverter.USCup(15)).toBe('O');
    expect(cupConverter.USCup(16)).toBe('P');
    expect(cupConverter.USCup(17)).toBe('Q');
    expect(cupConverter.USCup(18)).toBe('R');
    expect(cupConverter.USCup(19)).toBe('S');
    expect(cupConverter.USCup(20)).toBe('T');
    expect(cupConverter.USCup(21)).toBe('U');
    expect(cupConverter.USCup(22)).toBe('V');
    expect(cupConverter.USCup(23)).toBe('W');
    expect(cupConverter.USCup(24)).toBe('X');
    expect(cupConverter.USCup(25)).toBe('Y');
    expect(cupConverter.USCup(26)).toBe('Z');
})

// band size conversion
test("Should convert band size correctly", () => {
    expect(cupConverter.bandSize(100, 4)).toBe(42);
    expect(cupConverter.bandSize(100, 5)).toBe(42);
    expect(cupConverter.bandSize(80, 4)).toBe(34);
    expect(cupConverter.bandSize(108, 10)).toBe(44);
})

// JP to US conversion
test("Should convert JP A to US AA", () => {
    expect(cupConverter.JPtoUS('A', 1, 1, 1)).toBe('4AA-0-0');
})

test("Should convert JP B to US A", () => {
    expect(cupConverter.JPtoUS('B', 30, 30, 30)).toBe('16A-12-12');
})

test("Should convert JP D to US B (metric conversion)", () => {
    expect(cupConverter.JPtoUS('D', 50, 50, 50)).toBe('22B-20-20');
})

test("Should convert JP L to US E (metric conversion)", () => {
    expect(cupConverter.JPtoUS('L', 100, 100, 100)).toBe('40E-39-39');
})

test("Should convert JP Q to US G (metric conversion)", () => {
    expect(cupConverter.JPtoUS('Q', 150, 150, 150)).toBe('56G-59-59');
})

test("minimized version should return same result", () => {
    expect(cupConverterMin.JPtoUS('A', 1, 1, 1)).toBe(cupConverter.JPtoUS('A', 1, 1, 1));
    expect(cupConverterMin.JPtoUS('B', 30, 30, 30)).toBe(cupConverter.JPtoUS('B', 30, 30, 30));
    expect(cupConverterMin.JPtoUS('D', 50, 50, 50)).toBe(cupConverter.JPtoUS('D', 50, 50, 50));
    expect(cupConverterMin.JPtoUS('L', 100, 100, 100)).toBe(cupConverter.JPtoUS('L', 100, 100, 100));
    expect(cupConverterMin.JPtoUS('Q', 150, 150, 150)).toBe(cupConverter.JPtoUS('Q', 150, 150, 150));
    expect(cupConverterMin.JPtoUS('A', 1, 1, 1)).toBe(cupConverterMin.JPtoUS('A', 1, 1, 1));
    expect(cupConverterMin.JPtoUS('B', 30, 30, 30)).toBe(cupConverterMin.JPtoUS('B', 30, 30, 30));
    expect(cupConverterMin.JPtoUS('D', 50, 50, 50)).toBe(cupConverterMin.JPtoUS('D', 50, 50, 50));
})

// https://erodougazo.com/actress/av/%E6%A1%9C%E3%82%8A%E3%82%87%E3%81%86%E3%81%8B/
test("Test against 桜りょうか", () => {
    expect(cupConverter.JPtoUS('L', 108, 60, 90)).toBe('42E-24-35');
    expect(cupConverterMin.JPtoUS('L', 108, 60, 90)).toBe('42E-24-35');
})

// https://erodougazo.com/actress/av/%E5%A1%94%E4%B9%83%E8%8A%B1%E9%88%B4/
test("Test against 塔乃花鈴", () => {
    expect(cupConverter.JPtoUS('F', 87, 60, 89)).toBe('36B-24-35');
    expect(cupConverterMin.JPtoUS('F', 87, 60, 89)).toBe('36B-24-35');
})

// https://erodougazo.com/actress/av/%E6%A4%BF%E3%82%8A%E3%81%8B/
test("Test against 椿りか", () => {
    expect(cupConverter.JPtoUS('G', 88, 55, 84)).toBe('36C-22-33');
    expect(cupConverterMin.JPtoUS('G', 88, 55, 84)).toBe('36C-22-33');
})

// https://erodougazo.com/actress/av/%E7%99%BD%E6%A3%AE%E3%81%8F%E3%82%8B%E3%81%BF/
test("Test against 白森くるみ", () => {
    expect(cupConverter.JPtoUS('C', 82, 55, 82)).toBe('36A-22-32');
    expect(cupConverterMin.JPtoUS('C', 82, 55, 82)).toBe('36A-22-32');
})

// https://erodougazo.com/actress/av/%E6%9C%A8%E6%9D%91%E6%84%9B%E5%BF%83/
test("Test against 木村愛心", () => {
    expect(cupConverter.JPtoUS('L', 108, 60, 90)).toBe('42E-24-35');
    expect(cupConverterMin.JPtoUS('L', 108, 60, 90)).toBe('42E-24-35');
})

// https://erodougazo.com/actress/av/%E7%9A%86%E6%9C%88%E3%81%B2%E3%81%8B%E3%82%8B/
test("Test against 皆月ひかる (A)", () => {
    expect(cupConverter.JPtoUS('A', 83, 55, 85)).toBe('36AA-22-33');
    expect(cupConverterMin.JPtoUS('A', 83, 55, 85)).toBe('36AA-22-33');
})

// https://erodougazo.com/actress/av/Himari/
test("Test against Himari (Q)", () => {
    expect(cupConverter.JPtoUS('Q', 118, 65, 98)).toBe('44G-26-39');
    expect(cupConverterMin.JPtoUS('Q', 118, 65, 98)).toBe('44G-26-39');
})