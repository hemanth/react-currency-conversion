# react-currency-conversion
> Exchange rate for a given currency pair and value.

__Install it:__ `npm install --save react-currency-conversion`

``` js
import 'ExchangeRate' from react-currency-conversion;
React.render(<ExchangeRate from='USD' to='INR' val='100.20'/>,
            document.querySelector('#content'));
```

That would result in something like: `6513.8016` makes use of [fixer](http://fixer.io/)

# contributing

# quick start

```
$ npm run watch &
$ npm start
```

# commands

* `npm run dev-build` - build for dev.
* `npm run prod-build` - build for prod.
* `npm run watch` - automatically recompile during development.
* `npm start` - start a static development web server.
