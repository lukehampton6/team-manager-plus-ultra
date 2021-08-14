const Employee = require('../lib/Employee');

test('create employee object', () => {
    const testEmployee = new Employee('Test', 1, 'testemail');

    expect(testEmployee.name).toEqual(expect.any(String))
    expect(testEmployee.id).toEqual(expect.any(Number))
    expect(testEmployee.email).toEqual(expect.any(String))
    expect(testEmployee.getRole()).toBe('Employee')
});