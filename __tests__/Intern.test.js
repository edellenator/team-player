const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

test('Intern constructor property school validates', () => {
    const school = 'UCLA'
    const intern = new Intern('erik', 500, 'erik@astek.com', school);

    expect(intern.school).toBe(school);
})

test('getGithub method returns intern.school value', () => {
    const school = 'UCLA';
    const intern = new Intern('erik', 500, 'erik@astek.com', school);

    expect(intern.getSchool()).toBe(school);
})

test('getRole method returns Intern as a string', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
})