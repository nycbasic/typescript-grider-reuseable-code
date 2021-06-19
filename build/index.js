"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_reader_1 = require("./match-reader");
var csv_file_reader_1 = require("./csv-file-reader");
var csvFileReader = new csv_file_reader_1.CsvFileReader('football.csv');
var matchReader = new match_reader_1.MatchReader(csvFileReader);
matchReader.load();
