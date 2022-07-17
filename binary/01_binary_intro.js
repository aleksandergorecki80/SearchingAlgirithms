const states = ["Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"IllinoisIndiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"MontanaNebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"PennsylvaniaRhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"]

const binarySearch1 = (state, value) => {
    let start = 0;
    let end = state.length - 1;
    do {
      var half = Math.floor((start + end) / 2);
      value < state[half] ? (end = half - 1) : (start = half + 1);
    } while (value !== state[half] && start <= end);
    return value !== state[half] ? "No value found" : half;
  };

  console.log(binarySearch1(states, 'Ohio'));