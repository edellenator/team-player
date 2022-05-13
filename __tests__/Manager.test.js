const Manager = require ("../lib/Manager.js")

test('creates a new manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
})

test('Manager constructor property officeNumber validates', () => {
    const officeNumber = '818-901-9876 x121';
    const manager = new Manager('erik', 500, 'erik@astek.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
})

test('getRole method returns Manager as a string', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
})
