const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const testEngineer = new Engineer('Test', 1, 'testemail', 'github.com/test');

    expect(testEngineer.name).toEqual(expect.any(String))
    expect(testEngineer.id).toEqual(expect.any(Number))
    expect(testEngineer.email).toEqual(expect.any(String))
    expect(testEngineer.github).toEqual(expect.any(String))
    expect(testEngineer.getRole()).toBe('Engineer')
});