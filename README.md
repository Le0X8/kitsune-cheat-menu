# kitsune-cheat-menu
Cheat menu for the Google Champion Island game (aka kitsune)

## Features

(coming soon)

## Installation

> [!NOTE]
> The cheat menu will only work until you exit or reload the game as this is not a browser extension.

1. [Start the game](https://www.google.com/logos/2020/kitsune/rc7/kitsune20.html)
2. Open the devtools, paste the following code (your browser may block pasting cuz pasting unknown stuff is dangerous here) and press <kbd>enter</kbd>:

```js
document.body.appendChild((()=>{const e=document.createElement('script');e.src='https://cdn.jsdelivr.net/gh/Le0X8/kitsune-cheat-menu@latest/dist/cheat.js';return e;})());
```
<!--
Code without caching:
document.body.appendChild((()=>{const e=document.createElement('script');e.src='https://le0x8.github.io/kitsune-cheat-menu/dist/cheat.js';return e;})());
-->

## Usage

Press <kbd>alt</kbd><kbd>shift</kbd> to open the menu.
