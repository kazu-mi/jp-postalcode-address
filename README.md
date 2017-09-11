# Japanese Postalcode convert address

## install

```.sh
npm i --save jp-postalcode-address
```

## usage

```.js
var JpPostalcode = require('jp-postalcode-address');

JpPostalCode('160-0021', 
  function (successJson) { }, 
  function (error) { });

JpPostalCode('1600021', 
  function (successJson) { }, 
  function (error) { });
```

## response

using zipcloud api

http://zipcloud.ibsnet.co.jp/doc/api