export const order = (a, b) => {
  console.log(a.fields.order);
  if (a.fields.order < b.fields.order) {
    return -1;
  }
  if (a.fields.order > b.fields.order) {
    return 1;
  }
  return 0;
};
