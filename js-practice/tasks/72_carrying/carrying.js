export const carrying = (n, m) => {
  if (m !== undefined) {
    return n + m;
  }
  return (m) => (typeof m === 'number' && typeof n === 'number' ? n + m : undefined);
};
