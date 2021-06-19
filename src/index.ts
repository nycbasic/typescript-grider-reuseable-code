import { MatchReader } from "./match-reader";
import { Summary } from "./summary";

const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();

const summary = Summary.winsHTMLReport("Man United");
summary.buidANdPrintReport(matchReader.matches);
