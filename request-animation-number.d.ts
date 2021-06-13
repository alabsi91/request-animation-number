type requestFrameEasing = "linear" | "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInExpo" | "easeOutExpo" | "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce";

interface requestFrameOptions {
    /**
     * start form this number/s
     *
     * takes one number or array of numbers
     * 
     * **Initial Value** `0 | [0, 0 , ...]`
    */
    from?: Number | Array<number>,
    /**
     * end at this number/s
     *
     * takes one number or array of numbers
    */
    to: Number | Array<number>,
    /**
     * the duration the function will take to change the number (in milliseconds)
     *
     * **Initial Value** `350 ms`
    */
    duration?: Number,
    /**
     * wait time before starting (in milliseconds)
     *
     * **Initial Value** `0 ms`
    */
    delay?: Number,
    /**
     * Easing functions specify the rate of change of the number over time.
     * 
     * Takes a String or Function
     *
     * **Initial Value** `linear`
    */
    easingFunction?: requestFrameEasing | Function,
    /**
     * go back to the start point if true
     *
     * **Initial Value** `false`
    */
    yoyo?: Boolean,
    /**
     * the duration to go back to start point (in milliseconds)
     *
     * **Initial Value** `duration`
    */
    yoyoDuration?: Number,
    /**
     * wait time before starting the yoyo (in milliseconds)
     *
     * **Initial Value** `delay`
    */
    yoyoDelay?: Number,
    /**
     * replay count after the first play
     * 
     * infinite if replay === -1 
     *
     * **Initial Value** `0`
    */
    replay?: Number,
}


/**
 * a function to be used mostly for animations
 * which takes a number and performes a callback function every time that number is updated
 * 
 *  in modern browsers this function will match the client screen refresh rate
 *
 * **Syntax** `requestNum(options, callback)`
 *
 *
 * @param {Function} callback
 *
 * this function will be called every time the number/s is updated
 *
 * this function take parameter/s which represent the updating number/s
 *
 * **Syntax** `function name(x, ...) { //... do somthing with (x , ...) }`
 *
 */
export function requestNum(options: requestFrameOptions, callback: Function): void
/**
 * takes a string of color and return an array of rgba values
 *
 * @param {String} color
 *
 * color format: rgb(r, g, b) | rgba(r, g, b, a) | hex (e.g. "#ffffff ") | color name (e.g. "red")
 *
 *
 */
export function colorToArr(color: String): Number[]
