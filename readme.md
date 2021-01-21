<div align="center">
<h1>use-string-diff</h1>

<p>custom react hook to get the difference between two strings
</p>
</div>

![Build Status](https://img.shields.io/travis/com/harout32/use-string-diff?style=for-the-badge)
![Version](https://img.shields.io/npm/v/use-string-diff?style=for-the-badge)
![Downloads](https://img.shields.io/npm/dm/use-string-diff?style=for-the-badge)

- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature requests](#-feature-requests)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via NPM which is bundled with NodeJS and
should be installed as one of your project's dependencies:

`npm install use-string-diff --save` or `yarn add use-string-diff`

## Usage

### Single Value

```
import { useStringDiff } from 'use-string-diff'


const MyComponent = () => {
  const [state, setState] = useState('');

  const difference = useStringDiff(value);

  return (
    <div>
      <input
        onChange={(event) => {
                setState(event.target.value);
            }}
        value={value}
        />
    </div>
  )
}
```

### Two Values

```
import { useStringDiff } from 'use-string-diff'

const INITIAL_STRING = 'Initial String';
const MyComponent = () => {

  const [state, setState] = useState(INITIAL_STRING);

  const difference = useStringDiff(INITIAL_STRING, state);

  return (
    <div>
      <input
        onChange={(event) => {
                setState(event.target.value);
            }}
      value={value}/>
    </div>
  )
}
```

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.
## LICENSE

MIT
