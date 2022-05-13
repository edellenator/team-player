const Engineer = require ('../lib/Engineer');

test('creates new engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
})

test('Engineer constructor property github validates', () => {
    const github = 'edellenator'
    const engineer = new Engineer('erik', 500, 'erik@astek.com', github);

    expect(engineer.github).toBe(github);
})

test('getGithub method returns engineer.github value', () => {
    const github = 'edellenator';
    const engineer = new Engineer('erik', 500, 'erik@astek.com', github);

    expect(engineer.getGithub()).toBe(github);
})

test('getRole method returns Engineer as a string', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})
