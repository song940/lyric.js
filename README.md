## lyric.js

> Lyric in JavaScript

### Lyric Parser

```js
import { parse } from "lyric.js";

const lyricText = `
[00:04.302][02:10.00] A
[00:00.000] B
[00:01.000] C
[00:02.000] D
[00:17.46] E
`;

const lyricArr = parse(lyricText);
console.log(lyricArr);

// ->
[
  { time: '00:00.000', timestamp: 0, content: ' B' },
  { time: '00:01.000', timestamp: 1000, content: ' C' },
  { time: '00:02.000', timestamp: 2000, content: ' D' },
  { time: '00:04.302', timestamp: 4302, content: ' A' },
  { time: '00:17.46', timestamp: 17046, content: ' E' },
  { time: '02:10.00', timestamp: 130000, content: ' A' }
]
```

### Lyric Cuepoint

```js
import { parse, cue } from "lyric.js";

const lyricArr = parse(lyricText);

const update = cue(lyricArr, line => {
  console.log('current:', line);
});

window.audioDOM.addEventListener("timeupdate", () => {
  const { currentTime } = window.audioDOM;
  update(currentTime);
});
```

## License

This project is under GPLv2 .