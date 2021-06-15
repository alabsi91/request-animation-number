# Request Animation Number

### Features

- Light Animation library for modern JavaScript.

- Based on ` requestAnimationFrame()` method which generates smooth animation and transitions.

- Matches animation speed on different screens refresh rates. _Tested on 60Hz and 145Hz_

- Animate anything takes a value as number.

  > E.g. scrolling , width, color

- Contains most popular Easing functions with the ability to provide your own.

  > E.g. EaseIn, Ease Out, Ease In Out, .... and more

- You can visit this site to see all available Easing function with visual presentations.
  [https://visual-timing-functions.netlify.app/](https://visual-timing-functions.netlify.app/)

[![](https://github.com/alabsi91/request-animation-number/blob/media/20210613_185929~1.gif)](https://visual-timing-functions.netlify.app/)

### Syntax

- `requestNum(options, callback)`

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
  // ...
});
```

### How to animate colors

- you can ether use `rgb` values as an array of numbers or you can use `colorToArr()` method to convert color from `string` to
  array of numbers which represents `rgb` values.

- `colorToArr()` method takes a `string` and returns an array of number as `[r, g, b, a]`.
- `colorToArr()` accept following formats: `rgb(r, g, b) , rgba(r, g, b, a) , hex (e.g. "#ffffff ") , color name (e.g. "red")`

#### Example for colors animation

![](https://github.com/alabsi91/request-animation-number/blob/media/20210613_215930~1.gif)

```javascript
import { requestNum, colorToArr } from 'request-animation-number';

const element = document.getElementById('circle');

const animationOptions = {
  from: colorToArr('brown'), // returns [163, 54, 54]
  to: colorToArr('#000000'), // returns [0, 0, 0]
  duration: 1000,
  easingFunction: 'easeInSine',
};

requestNum(animationOptions, (r, g, b) => {
  element.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});
```
### Sequential animation

- `requestNum()` is an asynchronous function.

- You can use `await` to create sequences of animation by waiting for the first animation to end then starting the next.

#### Example for sequential animation

![](https://github.com/alabsi91/request-animation-number/blob/media/20210614_213742~2.gif)

```javascript
import { requestNum } from 'request-animation-number';

async function animate() {
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');

  await requestNum({ to: 350 }, left => (circle1.style.left = left + 'px'));

  requestNum({ to: 350 }, right => (circle2.style.right = right + 'px'));
}

animate();
```

- Note that if `replay` set to `-1` it will repeat infinitely.

#### Another way to make sequential animation without using asynchronous function

```javascript
import { requestNum } from 'request-animation-number';

function animate() {
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');

  requestNum({ to: 350 }, left => {
    circle1.style.left = left + 'px';

    // detect when the animation ends
    if (left === 350) {
      requestNum({ to: 350 }, right => (circle2.style.right = right + 'px'));
      // ...
    }
  });
}

animate();
```

### Options _[Object]_

#### from: _[Number | Array of Numbers]_ _[optional]_

- Starts form this number/s.
- Takes one number or array of numbers or if a value not provided will be set to 0 by default.
- **Initial Value** `0 | [0, 0 , ...]`

#### to: _[Number | Array of Numbers]_

- Ends at this number/s.
- takes one number or array of numbers.

#### duration: _[Number]_ _[optional]_

- The duration function will take to change the number/s (in milliseconds).
- **Initial Value** `350`.

#### delay: _[Number]_ _[optional]_

- Delay time before starting (in milliseconds).
- **Initial Value** `0`.

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

- Animate back to the start point if true.
- **Initial Value** `false`.

#### yoyoDuration: _[Number]_ _[optional]_

- The duration to go back to start point (in milliseconds).
- **Initial Value** `duration`.

#### yoyoDelay: _[Number]\*\*[optional]_

- Delay time before starting the yoyo (in milliseconds).
- **Initial Value** `delay`.

#### replay: _[Number]_ _[optional]_

- Replay count after the first play.
- infinite if replay value is ` -1`.
- **Initial Value** `0`.
