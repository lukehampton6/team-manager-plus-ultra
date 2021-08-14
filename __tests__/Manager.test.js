const Manager = require('../lib/Manager');

test('create manager object', () => {
    const testManager = new Manager('Test', 1, 'testemail', 1);

    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.id).toEqual(expect.any(Number))
    expect(testManager.email).toEqual(expect.any(String))
    expect(testManager.officeNumber).toEqual(expect.any(Number))
    expect(testManager.getRole()).toBe('Manager')
});