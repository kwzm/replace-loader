# replace-loader
A loader to replace text in webpack.
## Install
`npm i @kwzm/replace-loader`
## Usage
### Single replacement
```
{
  loader: '@kwzm/replace-loader',
    options: {
      replace: {
        'replaced text': 'new text'
      }
    }
}
```
### Multiple replacement
```
{
  loader: '@kwzm/replace-loader',
    options: {
      replace: {
        'replaced text one ': 'new text one',
        'replaced text two ': 'new text two'
      }
    }
}
```
## Licence
[MIT](http://en.wikipedia.org/wiki/MIT_License)
