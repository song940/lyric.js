## lyric.js

> Lyric in JavaScript


### Install

```sh
~$ npm i lyric.js --save
```

### Lyric Parser

```js
import { parse } from "lyric.js";

const lyricText = `
[ar:Chubby Checker oppure  Beatles, The]
[al:Hits Of The 60's - Vol. 2 – Oldies]
[ti:Let's Twist Again]
[au:Written by Kal Mann / Dave Appell, 1961]
[length: 2:23]

[00:01.00][00:12.00]Naku Penda Piya-Naku Taka Piya-Mpenziwe
[00:15.30]Some more lyrics ...
`;

const lyric = parse(lyricText);
console.log(lyric);
```

Output:

```js
{
  tags: {
    ar: 'Chubby Checker oppure  Beatles, The',
    al: "Hits Of The 60's - Vol. 2 – Oldies",
    ti: "Let's Twist Again",
    au: 'Written by Kal Mann / Dave Appell, 1961',
    length: '2'
  },
  lines: [
    {
      timestamp: 1000,
      time: '00:01.00',
      content: 'Naku Penda Piya-Naku Taka Piya-Mpenziwe'
    },
    {
      timestamp: 12000,
      time: '00:12.00',
      content: 'Naku Penda Piya-Naku Taka Piya-Mpenziwe'
    },
    {
      timestamp: 15030,
      time: '00:15.30',
      content: 'Some more lyrics ...'
    }
  ]
}
```

### Lyric Cuepoint

```js
import { parse, cue } from "lyric.js";

const lyric = parse(lyricText);

const update = cue(lyric.lines, line => {
  console.log('current:', line);
});

window.audioDOM.addEventListener("timeupdate", () => {
  const { currentTime } = window.audioDOM;
  update(currentTime);
});
```

## License

This project is under GPLv2 .