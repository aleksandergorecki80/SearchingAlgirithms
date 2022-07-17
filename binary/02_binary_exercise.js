const state = [1, 3, 4, 8, 10, 15, 17, 22, 24, 28];

const binarySearch = (state, value) => {
  let start = 0;
  let end = state.length - 1;
  let counter =0
  do {
    var half = Math.floor((start + end) / 2);
    value < state[half] ? (end = half - 1) : (start = half + 1);
    if(half>end || half<start) return -1
    counter ++
  } while (value !== state[half] && start <= end);
  console.log(counter , 'counter')
  return value !== state[half] ? "No value found" : half;
};

console.log(binarySearch(state, 16));
