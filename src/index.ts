import { MatchReader } from "./match-reader";
import { CsvFileReader } from "./csv-file-reader";
import { ConsoleReport } from "./reports/console-report";
import { HTMLReport } from "./reports/html-report";
import { WinsAnalysis } from "./analyzers/wins-analysis";
import { Summary } from "./summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HTMLReport());
summary.buidANdPrintReport(matchReader.matches);
