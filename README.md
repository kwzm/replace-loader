# replace-loader
A loader to replace text in webpack, since the internal implementation is based on the [string.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) implementation, the methods used are basically the same.
## Install
`npm i @kwzm/replace-loader`
## Usage
```
{
  loader: '@kwzm/replace-loader',
    options: {
      replace: [
        { from: 'old text', to: 'new text' },
        { from: /old text/gi, to: 'new text'}
      ]
    }
}
```
## Licence
[MIT](http://en.wikipedia.org/wiki/MIT_License)
