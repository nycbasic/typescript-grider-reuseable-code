import { MatchData } from "./match-data";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}

  buidANdPrintReport(matches: MatchData[]): void {
    const { analyzer, outPutTarget } = this;
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
  }
}
