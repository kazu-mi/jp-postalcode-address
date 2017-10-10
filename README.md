# Japanese Postalcode convert address

## install

```.sh
npm i --save jp-postalcode-address
```

## usage

```.js
var JpPostalcode = require('jp-postalcode-address');

JpPostalCode('182-0033', 
  function (successJson) { }, 
  function (error) { });

// or

JpPostalCode('1820033', 
  function (successJson) { }, 
  function (error) { });
```

## response

using geoapi.heartrails

http://geoapi.heartrails.com/api.html#postal

```.js
{
	response: {
		location: [ 
			{
				city: '調布市',
				city_kana: 'ちょうふし',
				town: '富士見町一丁目',
				town_kana: 'ふじみちょう',
				x: '139.535803',
				y: '35.66014',
				prefecture: '東京都',
				postal: '1820033'
			},
			{ 
				city: '調布市',
				city_kana: 'ちょうふし',
				town: '富士見町二丁目',
				town_kana: 'ふじみちょう',
				x: '139.540821',
				y: '35.658786',
				prefecture: '東京都',
				postal: '1820033' 
			},
			{ 
				city: '調布市',
				city_kana: 'ちょうふし',
				town: '富士見町三丁目',
				town_kana: 'ふじみちょう',
				x: '139.540118',
				y: '35.663991',
				prefecture: '東京都',
				postal: '1820033' 
			},
			{ 
				city: '調布市',
				city_kana: 'ちょうふし',
				town: '富士見町四丁目',
				town_kana: 'ふじみちょう',
				x: '139.535702',
				y: '35.666325',
				prefecture: '東京都',
				postal: '1820033' 
				}
			]
	},
}
```

## license

MIT