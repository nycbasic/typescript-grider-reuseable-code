"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    Summary.prototype.buidANdPrintReport = function (matches) {
        var _a = this, analyzer = _a.analyzer, outPutTarget = _a.outPutTarget;
        var output = this.analyzer.run(matches);
        this.outPutTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
