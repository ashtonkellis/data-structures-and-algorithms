const BinaryTree = require('../18-find-maximum-value-binary-tree/find-maximum-value-binary-tree');
const btSharedVals = require('../32-tree-intersection/tree-intersection');

describe('#btSharedVals', () => {
  test('#btSharedVals: simple case', () => {
    const bt1 = new BinaryTree();
    bt1.insert(1);  
    bt1.insert(2);  
    bt1.insert(3);
    bt1.insert(4);

    const bt2 = new BinaryTree();
    bt2.insert(1);
    bt2.insert(2);
    bt2.insert(3);
    bt2.insert(5);

    const sharedVals = btSharedVals(bt1, bt2);
    
    expect(sharedVals.has(1)).toBe(true);
    expect(sharedVals.has(2)).toBe(true);
    expect(sharedVals.has(3)).toBe(true);
    expect(sharedVals.has(4)).toBe(false);
    expect(sharedVals.has(5)).toBe(false);
  });

  test('#btSharedVals: returns an instance of a set', () => {
    const bt1 = new BinaryTree();
    bt1.insert(1);  

    const bt2 = new BinaryTree();
    bt2.insert(1);

    const sharedVals = btSharedVals(bt1, bt2);

    expect(sharedVals).toBeInstanceOf(Set);
  });

  test('#btSharedVals: returns null on no shared vals', () => {
    const bt1 = new BinaryTree();
    bt1.insert(1);
    bt1.insert(2);
    bt1.insert(3);

    const bt2 = new BinaryTree();
    bt2.insert(4);
    bt2.insert(5);
    bt2.insert(6);

    const sharedVals = btSharedVals(bt1, bt2);

    expect(sharedVals).toBeNull();
  });


});
