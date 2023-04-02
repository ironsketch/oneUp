export class Helper {
    /**
     * Checks if the object is null or undefined
     *
     * @param obj - Any object
     * @returns whether or not the object is null or undefined
     */
    public static isEmptyObject(obj: any): boolean {
        return (obj === null || obj === undefined);
    }
}