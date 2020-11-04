import * as difflib from './difflib.js'


var s = new difflib.SequenceMatcher(null, 'abcd', 'bcde');
console.log(s.ratio())
console.log("Hello World");
