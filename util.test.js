// jest.mock('./http');

const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  expect.assertions(1);
  return loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
