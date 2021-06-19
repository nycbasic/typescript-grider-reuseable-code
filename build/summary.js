"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var wins_analysis_1 = require("./analyzers/wins-analysis");
var html_report_1 = require("./reports/html-report");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.winsHTMLReport = function (team) {
        return new Summary(new wins_analysis_1.WinsAnalysis(team), new html_report_1.HTMLReport());
    };
    Summary.prototype.buidANdPrintReport = function (matches) {
        var _a = this, analyzer = _a.analyzer, outPutTarget = _a.outPutTarget;
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
