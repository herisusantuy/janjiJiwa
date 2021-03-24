function freeCash(visitors, times) {
  let obj = {};
  for (let i = 0; i < times.length; i++) {
    if (!obj[times[i]]) {
      obj[times[i]] = 1;
    } else {
      obj[times[i]]++;
    }
  }
  return Math.max(...Object.values(obj));
}

// console.log(freeCash(4,["8:0","8:10","8:10","8:45"]))
// console.log(freeCash(3,["0:12","10:11","22:22"]))
