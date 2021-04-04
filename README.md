# prevent-orientation

Prevent orientation mode on mobile device

[![NPM version](https://img.shields.io/npm/v/prevent-orientation.svg)](https://www.npmjs.com/package/prevent-orientation)
[![NPM yearly download](https://img.shields.io/npm/dy/prevent-orientation.svg)](https://www.npmjs.com/package/prevent-orientation)

![screenshots](screenshots.png)

## Installation

```sh
$ yarn add prevent-orientation
```

or

```html
<script src="//unpkg.com/prevent-orientation"></script>
```

## Usage

```ts
import {PreventOrientation} from 'prevent-orientation';

// Prevent to portrait orientation
new PreventOrientation().preventPortrait();

// Prevent to landscape orientation
new PreventOrientation().preventLandscape();
```

## Customize

```ts
new PreventOrientation({
  text: 'Sorry, this device orientation is not supported',
  color: 'rgb(90, 90, 90)',
  background:
    'linear-gradient(to right, rgb(255, 175, 189), rgb(255, 195, 160))',
  fontSize: '1.2rem',
}).preventOrientationToAngle(0);
```

## License

MIT
