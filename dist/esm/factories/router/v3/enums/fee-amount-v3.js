export var FeeAmount;
(function (FeeAmount) {
    FeeAmount[FeeAmount["LOW"] = 500] = "LOW";
    FeeAmount[FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    FeeAmount[FeeAmount["HIGH"] = 10000] = "HIGH";
})(FeeAmount || (FeeAmount = {}));
export var feeToPercent = function (feeAmount) {
    switch (feeAmount) {
        case FeeAmount.LOW:
            return 0.0005;
        case FeeAmount.MEDIUM:
            return 0.003;
        case FeeAmount.HIGH:
            return 0.01;
    }
};
export var percentToFeeAmount = function (percent) {
    switch (percent) {
        case 0.0005:
            return FeeAmount.LOW;
        case 0.003:
            return FeeAmount.MEDIUM;
        case 0.01:
            return FeeAmount.HIGH;
        default:
            return FeeAmount.MEDIUM;
    }
};
