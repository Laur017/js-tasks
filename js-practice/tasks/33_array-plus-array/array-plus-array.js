export const arrayPlusArray = (arr1, arr2) =>
  (arr1.length > arr2.length ? arr1 : arr2).map(
    (el, i) => el + (arr1.length > arr2.length ? arr2[i] ?? 0 : arr1[i] ?? 0)
  );
