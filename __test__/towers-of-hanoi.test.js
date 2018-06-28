'use strict';

const TowersOfHanoi = require('../13-towers-of-hanoi/towers-of-hanoi');

let testTOH;

beforeEach(() => {
  testTOH = new TowersOfHanoi(3);
});

afterEach(() => {
  testTOH = null;
});

describe('Towers of Hanoi', () => {
  test('files linked', () => {
    expect(testTOH).toBeInstanceOf(TowersOfHanoi);
  });
});
