var Utils = (function () {
    function Utils() {
    }
    /**
     * Converts given radians to degrees
     * @param radians
     */
    Utils.toDegrees = function (radians) {
        return radians * (180 / Math.PI);
    };
    /**
     * Converts given degrees to radians
     * @param degrees
     */
    Utils.toRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    /**
     * Generates a random number between min and max
     * @param min
     * @param max
     * @param doFloor Round outcome?
     */
    Utils.random = function (min, max, doFloor) {
        if (doFloor === void 0) { doFloor = false; }
        if (doFloor) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        else {
            return Math.random() * (max - min) + min;
        }
    };
    /**
     * Rounds to the given decimal count
     * @param value
     * @param decimalCount
     */
    Utils.roundTo = function (value, decimalCount) {
        return Math.round(value * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
    };
    ;
    /**
     * Checks if the given value is in the range of the given numbers
     * @param value
     * @param min
     * @param max
     */
    Utils.inRange = function (value, min, max) {
        return value >= Math.min(min, max) && value <= Math.max(min, max);
    };
    ;
    /**
     * Clamps the given value
     * @param value
     * @param min
     * @param max
     */
    Utils.clamp = function (value, min, max) {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    };
    ;
    /**
     * Checks if the given variable ís defined and not null
     * @param variable
     */
    Utils.exists = function (variable) {
        return typeof variable !== "undefined" && variable !== null;
    };
    ;
    return Utils;
}());
//# sourceMappingURL=Utils.js.map