function getTotalShelves(total, max) {
  let count = 0;
  let saldo = total;
  while (saldo > 0) {
    count++;
    saldo -= max;
  }
  return count;
}
function rewards(cups, medals, shelves) {
  // get total cups & medals
  let totalCups = cups.reduce((a, b) => a + b);
  let totalMedals = medals.reduce((a, b) => a + b);
  // get how many shelf need to store cups & medals
  let totalShelves =
    getTotalShelves(totalCups, 5) + getTotalShelves(totalMedals, 10);
  if (shelves >= totalShelves) {
    return "YES";
  } else {
    return "NO";
  }
}

// console.log(rewards([1,1,1],[1,1,1],4))
// console.log(rewards([1,1,3],[2,3,4],2))
// console.log(rewards([1,0,0],[1,0,0],1))
