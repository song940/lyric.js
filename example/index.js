import { parse } from "../index.js";

const lyricText = `
[00:04.302][02:10.00] A
[00:00.000] B
[00:01.000] C
[00:02.000] D
[00:17.46] E
`;

const lyricArr = parse(lyricText);
console.log(lyricArr);