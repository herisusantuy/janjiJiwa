function playSnuke(shops, data) {
  let prices = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][2] - data[i][0] > 0) {
      prices.push(data[i][1]);
    }
  }
  if (prices.length == 0) {
    return -1;
  } else {
    return Math.min(...prices);
  }
}

// console.log(playSnuke(3,[[3,9,5],[4,8,5],[5,7,5]]))
// console.log(playSnuke(3,[[5,9,5],[6,8,5],[7,7,5]]))
