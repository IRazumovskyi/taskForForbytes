const convert = require('../main');

test('12', () => {
  expect(convert(12)).toBe("twelve");
});

test('100', () => {
  expect(convert(100)).toBe("one hundred");
});

test('23459', () => {
  expect(convert(23459)).toBe("twenty three thousand four hundred fifty nine");
});


test('fasdfsjfasj', () => {
  expect(convert('fasdfsjfasj')).toBe('error');
});
