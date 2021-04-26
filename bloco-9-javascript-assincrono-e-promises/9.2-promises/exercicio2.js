function promise() {
  const myPromise = new Promise((res, rej) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1,
    )

      const sum = myArray.map(num => num * num)
      .reduce((acc, curr) => acc + curr);

      sum < 8000 ? res() : rej();
  });
  myPromise
    .then(() => console.log('resolve'))
    .catch(() => console.log('reject'))
}

promise();