
const r0 = /^(\[.+\])+(.+)?/;
const r1 = /\[(.*?)\]/g;
const r2 = /\[(.+)\]/;
const rTime = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/;

/**
 * lyric parse
 * @docs https://en.wikipedia.org/wiki/LRC_(file_format)
 * @param {*} lyric 
 * @returns 
 */
export const parse = lyric => {
  const lines = lyric.split(/\n/g);
  const result = lines.filter(Boolean).reduce((result, line) => {
    // [x] z -> ["[x]", z]
    const [, t, content = ""] = line.match(r0);
    // [x][y] -> [x], [y]
    for (const timeTag of t.match(r1)) {
      // [x] -> x
      const tagContent = timeTag.match(r2)[1];
      if (rTime.test(timeTag)) { // Is it like: [00:00.0] ?
        const [, m, s, ms] = rTime.exec(timeTag);
        const timestamp = (m * 60 * 1000) + (s * 1000) + (ms * 1);
        result.lines.push({
          timestamp,
          time: tagContent,
          content: String(content).trim()
        });
      } else {
        // [tag: xx]
        const i = tagContent.indexOf(':');
        const tagName = tagContent.substr(0, i);
        const value = tagContent.slice(i + 1);
        result.tags[tagName] = String(value).trim();
      }
    }
    return result;
  }, { tags: {}, lines: [] });
  result.lines = result.lines.sort((a, b) =>
    a.timestamp - b.timestamp
  );
  return result;
};