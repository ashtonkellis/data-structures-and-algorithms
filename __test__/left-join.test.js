const leftJoin = require('../33-left-join/left-join');

describe('#leftJoin', () => {
  let left;
  let right;
  let joined;
  
  beforeEach(() => {
    left = {
      a: 1,
      b: 2,
      c: 3,
    };
  
    right = {
      a: 4,
      b: 5,
      d: 6,
    };
  
    joined = leftJoin(left, right);
  });

  afterEach(() => {
    left = null;
    right = null;
    joined = null;
  });

  test('#leftJoin, simple case', () => { 
    expect(joined[0][0]).toBe('a');
    expect(joined[1][0]).toBe('b');
    expect(joined[2][0]).toBe('c');

    expect(joined[0][1]).toBe(1);
    expect(joined[1][1]).toBe(2);
    expect(joined[2][1]).toBe(3);

    expect(joined[0][2]).toBe(4);
    expect(joined[1][2]).toBe(5);
    expect(joined[2][2]).toBeNull();
  });

  test('#leftJoin, returns instance of array', () => {
    expect(joined).toBeInstanceOf(Array);
  });

  test('#leftJoin, does not chance inputs', () => {
    expect(left.a).toBe(1);
    expect(left.b).toBe(2);
    expect(left.c).toBe(3);

    expect(right.a).toBe(4);
    expect(right.b).toBe(5);
    expect(right.d).toBe(6);
  });
});
