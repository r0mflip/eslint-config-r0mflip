![npm-badge](https://img.shields.io/npm/v/eslint-config-r0mflip.svg?&style=flat-square)
![travis-badge](https://img.shields.io/travis/r0mflip/eslint-config-r0mflip/master.svg?label=Travis&style=flat-square)
![appveyor-badge](https://img.shields.io/appveyor/ci/r0mflip/eslint-config-r0mflip.svg?label=Appveyor&style=flat-square)

# eslint-config-r0mflip

[r0mflip's](https://github.com/r0mflip) eslint config, uses [`babel-eslint`](https://github.com/babel/babel-eslint) as a parser.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i --save-dev eslint
```

Next, install `eslint-config-r0mflip`:

```
$ npm i --save-dev eslint-config-r0mflip
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-config-romflip` globally.

## Usage

``` json
// .eslintrc

{
    "extends": [
        "romflip"
    ],
    "rules": {
        ...
    },
}
```

## Credits

* [eslint-config-google](https://github.com/google/eslint-config-google)

## Licence

(C) Ram Damera (@r0mflip) [MIT](LICENCE)
