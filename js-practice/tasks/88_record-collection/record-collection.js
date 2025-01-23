export const updateRecords = (id, prop, value) => {
  return {
    ...collection,
    [id]: {
      ...collection[id],
      [prop]: prop === 'tracks' ? collection[id][prop].push(value) : value
    }
  };
};
