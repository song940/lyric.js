
const parseTime = time => {
  const timeArr = time.match(/\[(.*?)\]/g);
  return timeArr.map(x => {
    const time = x.match(/\[(.+)\]/)[1];
    const [, m, s, ms] = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/.exec(x);
    return {
      time,
      timestamp: (m * 60 * 1000) + (s * 1000) + (ms * 1)
    }
  });
};

export const parse = lyric => {
  const lines = lyric.split(/\n/g);
  const arr = lines.filter(Boolean).reduce((arr, line) => {
    const [, t, content = ""] = line.match(/^(\[.+\])+(.+)?/);
    const times = parseTime(t);
    for (const { time, timestamp } of times) {
      arr.push({ time, timestamp, content });
    }
    return arr;
  }, []).sort((a, b) => a.timestamp - b.timestamp);
  return arr;
};