/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
  const codes = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const result = [];
  const hashMap = new Map();
  strs.forEach(word => {
    const hashedWord = hashWord(word);
    if (!hashMap.has(hashedWord)) {
      hashMap.set(hashedWord, []);
    }
    hashMap.get(hashedWord).push(word);
  });

  hashMap.forEach(ele => {
    result.push(ele);
  })
  return result;
  };

  const hashWord = function(word) {
  const hash = new Array(26).fill(0);
  for (const letter of word) {
      ++hash[codes[letter]]
  }
  return hash.toString();
}

module.exports = groupAnagrams;