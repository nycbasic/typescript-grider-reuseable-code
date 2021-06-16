"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_reader_1 = require("./match-reader");
var csv_file_reader_1 = require("./csv-file-reader");
var csvFileReader = new csv_file_reader_1.CsvFileReader('football.csv');
var matchReader = new match_reader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
