export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility

  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  // loop code
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
