export const typeGroomer = (types) => {
  return types.map(({ type }) => type).slice(0, 10);
};
