function bfTraversal(binaryTree, callback) {
  if (!binaryTree.root) return undefined;
  
  const queue = [];
  queue.unshift(binaryTree.root);
  
  while (queue.length) {
    const currentNode = queue.pop();
    
    if (currentNode.left) queue.unshift(currentNode.left);
    if (currentNode.right) queue.unshift(currentNode.right);
    callback(currentNode.value);
  }
  
  return undefined;
}

module.exports = function btSharedVals(bt1, bt2) {
  const seen = new Set();
  const shared = new Set();
  
  bfTraversal(bt1, (value) => {
    seen.add(value);
    console.log(value, 'VALUE');
    console.log(shared, 'SHARED');
  });

  bfTraversal(bt2, (value) => {
    if (seen.has(value)) shared.add(value);
  });

  return shared.size ? shared : null;
};
