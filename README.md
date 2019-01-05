# cpjax

> Callback Passing Javascript And Xtra stuff hopefully not XML

## What

Make AJAX requests look like anything else async in JavaScript.

## Usage

```js
var cpjax = require("cpjax");

cpjax("http://www.google.com", function(error, data) {
  if (error) {
    return console.error("OH NOES GOOGLE IS DOWN");
  }
  console.log("The google homepage: " + data);
});
```

`cpjax` is a wrapper around `simple-ajax`, and it returns a `simple-ajax` Object that you can use if you want to.
