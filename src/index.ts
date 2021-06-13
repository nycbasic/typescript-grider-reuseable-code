import { CsvFileReader } from "./csv-file-reader";
import { MatchResult } from "./match-result";

const reader = new CsvFileReader('football.csv')
reader.read();

console.log(reader.data[0][0])



// let manUnitedWins = 0;

// for (let match of reader.data) {
// 	if (match[1] === 'Man United' && match[5] === 'H') {
// 		manUnitedWins++;
// 	} else if (match[2] === 'Man United' && match[5] === 'A') {
// 		manUnitedWins++;
// 	}
// }

