export const updateInventory = (inventory1, inventory2) => {
  const products = inventory1.map((i) => i[1]);

  inventory2.forEach((el) => {
    if (products.indexOf(el[1]) > -1) {
      el[0] += inventory1[products.indexOf(el[1])][0];
      inventory1.splice(products.indexOf(el[1]), 1);
    }
    inventory1.push(el);
  });

  return inventory1.sort((a, b) => a[1].charCodeAt() - b[1].charCodeAt());
};
