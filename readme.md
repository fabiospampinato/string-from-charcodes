# String From CharCodes

An alternative to `String.fromCharCode` that doesn't throw with many arguments, while still remaining fast.

This should be about the fastest way to construct a string from charcodes.

## Install

```sh
npm install --save string-from-charcodes
```

## Usage

```ts
import fromCharCodes from 'string-from-charcodes';

const charCodes = [72, 101, 108, 108, 111, 44,  32,  87, 111, 114, 108, 100,  33];
const string = fromCharCodes ( charCodes );
console.log ( string ); // => 'Hello, World!'
```

## License

MIT © Fabio Spampinato
