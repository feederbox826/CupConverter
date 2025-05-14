const cupConverter = require('./cupConverter');

// Metric to Imperial
test("should convert 1cm successfully", () => {
    expect(cupConverter.metricToImp(1)).toBe(0);
})

test("should convert larger metric values successfully", () => {
    expect(cupConverter.metricToImp(30)).toBe(12);
})

// Lookup cup sizes
test("Should return AA for bustDiffIn < 1", () => {
    expect(cupConverter.lookupUSCup(0)).toBe('AA');
    expect(cupConverter.lookupUSCup(-1)).toBe('AA');
    expect(cupConverter.lookupUSCup(0.9)).toBe('AA');
})

test("Should return correct letter for bustDiffIn >= 1", () => {
    expect(cupConverter.lookupUSCup(1)).toBe('A');
    expect(cupConverter.lookupUSCup(2)).toBe('B');
    expect(cupConverter.lookupUSCup(3)).toBe('C');
    expect(cupConverter.lookupUSCup(4)).toBe('D');
    expect(cupConverter.lookupUSCup(5)).toBe('E');
    expect(cupConverter.lookupUSCup(6)).toBe('F');
    expect(cupConverter.lookupUSCup(7)).toBe('G');
    expect(cupConverter.lookupUSCup(8)).toBe('H');
    expect(cupConverter.lookupUSCup(9)).toBe('I');
    expect(cupConverter.lookupUSCup(10)).toBe('J');
    expect(cupConverter.lookupUSCup(11)).toBe('K');
    expect(cupConverter.lookupUSCup(12)).toBe('L');
    expect(cupConverter.lookupUSCup(13)).toBe('M');
    expect(cupConverter.lookupUSCup(14)).toBe('N');
    expect(cupConverter.lookupUSCup(15)).toBe('O');
    expect(cupConverter.lookupUSCup(16)).toBe('P');
    expect(cupConverter.lookupUSCup(17)).toBe('Q');
    expect(cupConverter.lookupUSCup(18)).toBe('R');
    expect(cupConverter.lookupUSCup(19)).toBe('S');
    expect(cupConverter.lookupUSCup(20)).toBe('T');
    expect(cupConverter.lookupUSCup(21)).toBe('U');
    expect(cupConverter.lookupUSCup(22)).toBe('V');
    expect(cupConverter.lookupUSCup(23)).toBe('W');
    expect(cupConverter.lookupUSCup(24)).toBe('X');
    expect(cupConverter.lookupUSCup(25)).toBe('Y');
    expect(cupConverter.lookupUSCup(26)).toBe('Z');
})

// JP to US conversion
test("Should convert JP A to US AA", () => {
    expect(cupConverter.jpToUS('A', 1, 1, 1)).toBe('0AA-0-0');
})

test("Should convert JP B to US A", () => {
    expect(cupConverter.jpToUS('B', 30, 30, 30)).toBe('12A-12-12');
})

test("Should convert JP D to US B (metric conversion)", () => {
    expect(cupConverter.jpToUS('D', 50, 50, 50)).toBe('20B-20-20');
})

test("Should convert JP L to US E (metric conversion)", () => {
    expect(cupConverter.jpToUS('L', 100, 100, 100)).toBe('39E-39-39');
})

test("Should convert JP Q to US G (metric conversion)", () => {
    expect(cupConverter.jpToUS('Q', 150, 150, 150)).toBe('59G-59-59');
})