import assert from 'assert';
import { parse } from "../index.js";
import test from './test.js';

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

test("lyric#parse", () => {
  assert.ok(lyric);
});

test("lyric#parse tags", () => {
  assert.ok(lyric.tags);
  assert.strictEqual(lyric.tags.length, '2:23');
  assert.strictEqual(lyric.tags.ar, 'Chubby Checker oppure  Beatles, The');
  assert.strictEqual(lyric.tags.al, `Hits Of The 60's - Vol. 2 – Oldies`);
  assert.strictEqual(lyric.tags.ti, `Let's Twist Again`);
  assert.strictEqual(lyric.tags.au, 'Written by Kal Mann / Dave Appell, 1961');
});

test("lyric#parse lines", () => {
  assert.ok(Array.isArray(lyric.lines));
  assert.strictEqual(lyric.lines[0].time, '00:01.00');
  assert.strictEqual(lyric.lines[1].time, '00:12.00');
  assert.strictEqual(lyric.lines[2].time, '00:15.30');
});