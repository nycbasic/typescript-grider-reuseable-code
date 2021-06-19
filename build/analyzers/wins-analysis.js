"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var match_result_1 = require("../match-result");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === "Man United" && match[5] === match_result_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === match_result_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.teamName + " won " + wins + " games!";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
