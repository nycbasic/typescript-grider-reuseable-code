import { MatchData } from "./match-data";
import { WinsAnalysis } from "./analyzers/wins-analysis";
import { HTMLReport } from "./reports/html-report";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}

  buidANdPrintReport(matches: MatchData[]): void {
    const { analyzer, outPutTarget } = this;
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
  }
}
