# kitsune-cheat-menu
Cheat menu for the Google Champion Island game (aka kitsune)

## Features

(coming soon)

## Installation

> [!NOTE]
> The cheat menu will only work until you exit or reload the game as this is not a browser extension.

### The easy way (bookmark)

1. Add a bookmark for the follwing URL: `javascript:document.body.appendChild((()%3D%3E%7Bconst%20e%3Ddocument.createElement('script')%3Be.src%3D'https%3A%2F%2Fraw.githubusercontent.com%2FLe0X8%2Fkitsune-cheat-menu%2Fmain%2Fcheat.js'%3Breturn%20e%3B%7D)())%3B`
3. [Start the game](https://www.google.com/logos/2020/kitsune/rc7/kitsune20.html)
4. Open the bookmark

### The devtools way

1. [Start the game](https://www.google.com/logos/2020/kitsune/rc7/kitsune20.html)
2. Open the devtools, paste the following code (your browser may block pasting cuz pasting unknown stuff is dangerous here) and press <kbd>enter</kbd>:

```js
document.body.appendChild((()=>{const e=document.createElement('script');e.src='https://raw.githubusercontent.com/Le0X8/kitsune-cheat-menu/main/cheat.js';return e;})());
```

## Usage

Press <kbd>alt</kbd><kbd>shift</kbd> to open the menu.
