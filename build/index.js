"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_reader_1 = require("./match-reader");
var summary_1 = require("./summary");
var matchReader = match_reader_1.MatchReader.fromCSV("football.csv");
matchReader.load();
var summary = summary_1.Summary.winsHTMLReport("Man United");
summary.buidANdPrintReport(matchReader.matches);
