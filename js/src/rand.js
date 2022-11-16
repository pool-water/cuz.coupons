let seedrandom = require('seedrandom');

let SEED = undefined;
let PRNG = undefined;

export function seed(seed) {
  SEED = seed;
  PRNG = new seedrandom(SEED);
  return SEED;
}

export function random() {
  PRNG.random();
}
