export const carrying = (n, m) => {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (m !== undefined) {
    return typeof m === 'number' ? n + m : undefined;
  }

  return (m) => (typeof m === 'number' ? n + m : undefined);
};
