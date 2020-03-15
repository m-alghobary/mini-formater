# mini-formater

a small and simple package for javascrip date formatting.

---

## Install

using NPM:

```
npm install mini-formater
```

in browser:

```
you can download the file: /browser/mini-formatter.js
```

---

## Usage

```javascript
const format = require('mini-formater');

const date = new Date('12-3-2020');
const result = format(date, 'mmm dd yyyy');

console.log(result); // Dec 03 2020
```

---

### Supported formats

| Format | Description                                   |
| ------ | --------------------------------------------- |
| d      | the date day as a single digit                |
| dd     | the date day as two digit                     |
| m      | the date month as a single digit              |
| mm     | the date month two digit                      |
| mmm    | the date month shortcut name (ex: 'Oct, Dec') |
| mmmm   | the date month full name                      |
| yy     | the date year as two digits                   |
| yyyy   | the date full year                            |

---

### Supported separators

separators are used to separate date parts:
| Separator | Example
|-----------|----------------
|' ' space | '12 Oct 2019
|'-' dash | '12-Oct-2019
|'/' slash | '12/Oct/2019

---

## License: MIT
