# Request Animation Number

### Features

- Light Animation library for modern JavaScript _(6.4KB)_.

- Based on ` requestAnimationFrame()` method which generates smooth animation and transitions.

- Matches animation speed on different screens refresh rates. _Tested on 60 and 145 refresh rate screens_

- Animate anything takes a value as number.

  > E.g. scrolling , width, color

- Contains most popular Easing functions with the ability to provide your own.

  > E.g. EaseIn, Ease Out, Ease In Out, .... and more

- You can visit this site to see all available Easing function with visual presentations.
  [https://visual-timing-functions.netlify.app/](https://visual-timing-functions.netlify.app/)

[![](https://github.com/alabsi91/request-animation-number/blob/media/20210613_185929~1.gif)](https://visual-timing-functions.netlify.app/)

### Syntax

- `requestFrame(options, callback)`

### Example

![](https://github.com/alabsi91/request-animation-number/blob/media/20210613_214717~2.gif)

```javascript
import { requestNum } from 'request-animation-number';

const element = document.getElementById('square');

const animationOptions = {
  from: [0, 1],
  to: [90, 2],
  duration: 500,
  easingFunction: 'easeInOutBack',
};

requestNum(animationOptions, (rotate, scale) => {
  element.style.transform = `rotate(${rotate}deg) scale(${scale})`;
});
```

### How to animate colors

- you can ether use rgb values as an array of number sor you can use `colorToArr()` method to convert color from string to array
  of numbers which represents rgb values.

- `colorToArr()` method takes a string and returns an array of number as `[r, g, b, a]`.
- `colorToArr()` accept following formats: `rgb(r, g, b) , rgba(r, g, b, a) , hex (e.g. "#ffffff ") , color name (e.g. "red")`

#### Example for colors animation

![](https://github.com/alabsi91/request-animation-number/blob/media/20210613_215930~1.gif)

```javascript
import { requestNum, colorToArr } from 'request-animation-number';

const element = document.getElementById('circle');

const animationOptions = {
  from: colorToArr('brown'), // return [163, 54, 54]
  to: colorToArr('#000000'), // return [0, 0, 0]
  duration: 1000,
  easingFunction: 'easeInSine',
};

requestNum(animationOptions, (r, g, b) => {
  element.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});
```

### Options _[Object]_

#### from: _[Number | Array of Numbers]_ _[optional]_

- Start form this number/s.
- Takes one number or array of numbers or if value not provided will be set to 0 automatically.
- **Initial Value** `0 | [0, 0 , ...]`

#### to: _[Number | Array of Numbers]_

- Ends at this number/s.
- takes one number or array of numbers.

#### duration: _[Number]_ _[optional]_

- The duration the function will take to change the number/s (in milliseconds).
- **Initial Value** `350 ms`.

#### delay: _[Number]_ _[optional]_

- wait time before starting (in milliseconds).
- **Initial Value** `0 ms`.

#### easingFunction: _[String | Function]_ _[optional]_

- Easing functions specify the rate of change of the number over time.
- Takes a String or Function.
- **Initial Value** `"linear"`.
- Avaliable Easing functions :
  `"linear", "easeInSine", "easeOutSine", "easeInOutSine", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeInBack", "easeOutBack", "easeInOutBack", "easeInElastic", "easeOutElastic", "easeInOutElastic", "easeInBounce", "easeOutBounce", "easeInOutBounce"`
  You can visit this site to see all available Easing function with visual presentations;
  [https://visual-timing-functions.netlify.app/](https://visual-timing-functions.netlify.app/)

- If you want to provide your own timing-function make sure that the function takes one parameter and returns one value.

```javascript
function easeInQuad(x) {
  return x * x;
}
```

#### yoyo: _[boolean]_ _[optional]_

- Go back to the start point if true.
- **Initial Value** `false`.

#### yoyoDuration: _[Number]_ _[optional]_

- The duration to go back to start point (in milliseconds).
- **Initial Value** `duration`.

#### yoyoDelay: _[Number]\*\*[optional]_

- wait time before starting the yoyo (in milliseconds).
- **Initial Value** `delay`.

#### replay: _[Number]_ _[optional]_

- Replay count after the first play.
- infinite if replay value is ` -1`.
- **Initial Value** `0`.
