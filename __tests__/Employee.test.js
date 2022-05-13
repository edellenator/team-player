const Employee = require ('../lib/Employee.js');

test("creates a new employee object", () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe('object');
})

test("employee name constructor argument validates", () => {
    const name = 'erik';
    const employee = new Employee(name);

    expect(employee.name).toBe('erik');
})

test("employee id constructor argument validates", () => {
    const id = 500;
    const employee = new Employee('erik', id);

    expect(employee.id).toBe(id);
})

test("employee email constructor argument validates", () => {
    const email = 'erik@astek.com';
    const employee = new Employee('erik', 500, email);

    expect(employee.email).toBe('erik@astek.com');
})

test("getName method retrieves value of employee.name", () => {
    const name = 'erik';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
})

test("getId method retrieves value of employee.id", () => {
    const id = 500;
    const employee = new Employee('erik', id);

    expect(employee.getId()).toBe(id);
})

test("getName method retrieves value of employee.name", () => {
    const email = 'erik@astek.com';
    const employee = new Employee('erik', 500, email);

    expect(employee.getEmail()).toBe(email);
})

test('getRole method returns Employee as a string', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
})