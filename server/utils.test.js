const { parsePathParameters } = require('./utils');


describe('parsePathParameters', () => {
  test('should return an object', () => {
    expect(parsePathParameters('', '')).toBeDefined();
    expect(typeof parsePathParameters('', '')).toBe('object');
  });

  test('parsePathParameters test', () => {
    expect(parsePathParameters('/api/dog/1', '/api/dog/:id')).toEqual({ 'id': 1 });
  });
});
