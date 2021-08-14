const Intern = require('../lib/Intern');

test('create intern object', () => {
    const testIntern = new Intern('Test', 1, 'testemail', 'testcollege');

    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.id).toEqual(expect.any(Number))
    expect(testIntern.email).toEqual(expect.any(String))
    expect(testIntern.school).toEqual(expect.any(String))
    expect(testIntern.getRole()).toBe('Intern')
});