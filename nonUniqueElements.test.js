import nonUniqueElements from './nonUniqueElements';


test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
})

test('Пограничные случаи', () => {
  expect(nonUniqueElements([])).toEqual([]);
  expect(nonUniqueElements([42])).toEqual([]);
  expect(nonUniqueElements([1, 2, 3, 4])).toEqual([]);
  expect(nonUniqueElements([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  expect(nonUniqueElements([-1, -1, 2, 3, 2, 4])).toEqual([-1, -1, 2, 2]);
  expect(nonUniqueElements([0, -1, -1, 0])).toEqual([0, -1, -1, 0]);
});