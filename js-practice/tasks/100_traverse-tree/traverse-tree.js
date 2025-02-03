export const traverseTree = (node, callback) => {
  callback(node);

  if (node.children) {
    node.children.forEach((child) => traverseTree(child, callback));
  }
};
