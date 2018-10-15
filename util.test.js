// jest.mock('./http');

const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
