function foxAndSnake(n, m) {
  let isRight = true;
  for (let i = 1; i <= n; i++) {
    let temp = "";
    for (let j = 1; j <= m; j++) {
      if (i % 2 != 0) {
        temp += "#";
      } else {
        if (isRight) {
          if (j == m) {
            temp += "#";
            isRight = false;
          } else {
            temp += ".";
          }
        } else {
          if (j == 1) {
            temp += "#";
          } else {
            temp += ".";
            if (j == m) {
              isRight = true;
            }
          }
        }
      }
    }
    console.log(temp);
  }
}

// foxAndSnake(3,3)
// foxAndSnake(3,4)
// foxAndSnake(5,3)
// foxAndSnake(9,9)
