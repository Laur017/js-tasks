import { cloneArr } from './clone-arr';

describe('cloneArr', () => {
  it('cloneArr([]) should return an array', () => {
    expect(Array.isArray(cloneArr([]))).toBe(true);
  });

  it('should not mutate the original array', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = cloneArr(original);

    copy.splice(0, 3);

    expect(original).toHaveLength(5);
  });

  it('should not be a ref to the original array', () => {
    const original = [];
    const copy = cloneArr(original);
    expect(original === copy).toBe(false);
  });

  it('should return a deep clone of the array', () => {
    const a = { a: 1 };
    const b = { a: 1 };
    const arr = [a, b];
    const newArr = cloneArr(arr);
    arr[0].a = 2;
    expect(arr).toStrictEqual([{ a: 2 }, { a: 1 }]);
    expect(newArr).toStrictEqual([{ a: 1 }, { a: 1 }]);
  });
});
