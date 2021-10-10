

export const cue = (arr, fn) => {
  let current;
  return (currentTime) => {
    const time = currentTime * 1000;
    arr.forEach((x, i) => {
      const next = arr[i + 1];
      if (
        time >= x.timestamp &&
        (next ? time < next.timestamp : true) &&
        current !== x
      ) {
        currentIndex = i;
        current = x;
        fn && fn(x);
      }
    });
  };
};