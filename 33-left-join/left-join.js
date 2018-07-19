'use strict';

function leftJoin(leftHashMap, rightHashMap) {
  return Object.keys(leftHashMap)
    .map(key => [key, leftHashMap[key], rightHashMap[key] || null]);
}

module.exports = leftJoin;
