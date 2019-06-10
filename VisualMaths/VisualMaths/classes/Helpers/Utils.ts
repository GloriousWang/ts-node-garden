class Utils {
    /**
     * Converts given radians to degrees
     * @param radians
     */
    public static toDegrees(radians: number): number {
        return radians * (180 / Math.PI);
    }

    /**
     * Converts given degrees to radians
     * @param degrees
     */
    public static toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }


    /**
     * Generates a random number between min and max
     * @param min
     * @param max
     * @param doFloor Round outcome?
     */
    public static random(min: number, max: number, doFloor: boolean = false): number {
        if (doFloor) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            return Math.random() * (max - min) + min;
        }
    }


    /**
     * Rounds to the given decimal count
     * @param value
     * @param decimalCount
     */
    public static roundTo(value: number, decimalCount: number): number {
        return Math.round(value * Math.pow(10, decimalCount)) / Math.pow(10, decimalCount);
    };


    /**
     * Checks if the given value is in the range of the given numbers
     * @param value
     * @param min
     * @param max
     */
    public static inRange(value: number, min: number, max: number): boolean {
        return value >= Math.min(min, max) && value <= Math.max(min, max);
    };

    /**
     * Clamps the given value
     * @param value
     * @param min
     * @param max
     */
    public static clamp(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    };


    /**
     * Checks if the given variable ís defined and not null
     * @param variable
     */
    public static exists(variable: any): boolean {
        return typeof variable !== "undefined" && variable !== null;
    };
}
