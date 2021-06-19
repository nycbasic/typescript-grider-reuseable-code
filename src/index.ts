import { MatchReader } from "./match-reader";
import { CsvFileReader } from "./csv-file-reader";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
