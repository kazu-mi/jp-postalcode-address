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

```.js
{
	"message": null,
	"results": [
		{
			"address1": "北海道",
			"address2": "美唄市",
			"address3": "上美唄町協和",
			"kana1": "ﾎｯｶｲﾄﾞｳ",
			"kana2": "ﾋﾞﾊﾞｲｼ",
			"kana3": "ｶﾐﾋﾞﾊﾞｲﾁｮｳｷｮｳﾜ",
			"prefcode": "1",
			"zipcode": "0790177"
		},
		{
			"address1": "北海道",
			"address2": "美唄市",
			"address3": "上美唄町南",
			"kana1": "ﾎｯｶｲﾄﾞｳ",
			"kana2": "ﾋﾞﾊﾞｲｼ",
			"kana3": "ｶﾐﾋﾞﾊﾞｲﾁｮｳﾐﾅﾐ",
			"prefcode": "1",
			"zipcode": "0790177"
		}
	],
	"status": 200
}
```

## license

MIT