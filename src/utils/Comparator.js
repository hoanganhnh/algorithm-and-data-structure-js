export default class Comparator {
    /**
     * Default comparison funtion. It just assumes that "a" and "b" are string or number.
     * @param {(string | number)} a
     * @param {(string | number)} b
     * @return {number}
     */
    static defaultComparatorFuntion(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }
    
    /**
     * Constructor
     * @param {function(a: *, b: *)} [compareFuntion] - It maybe custom compare functions that,
     * let's say may compare custom object together.
     */
    constructor(compareFuntion) {
        this.compare = compareFuntion || Comparator.defaultComparatorFuntion;
    }
    
    /**
     * Check if two variable are equal.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a, b) {
        return this.compare(a, b) === 0;
    }
    
    /**
     * Check variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    /**
     * Check variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    /**
     * Check variable "a" is less than equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Check variable "a" is greater than equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /** 
     * Reverse the comparison order
     */
    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}