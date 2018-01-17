ng-sparkline-seriesbar
================

ng-sparkline-seriesbar is a angular directive, that represents a dynamic sparkline (type = bar). It is based on the [jquery.sparkline](http://omnipotent.net/jquery.sparkline) library.

  ![Git Release][release-img]
  ![Git Issues][issues-img]
  [![MIT license][license-img]][license-url]


## Function

Everytime, you change the value of the directive, it adds a new bar. When reaching the maximum number of bars, it removes the first bar, and adds the latest value at the and.   

## Installation

First install the required libraries (jquery, jquery.sparkline and angular).

```
# bower install
```

> **Warning:**
> ```bower``` will not install ```jquery.sparkline``` correctly. You need to do the following, to get a full js file for ```jquery.sparkline```:

> **Note:**
> In this package I defined in .bowerrc to store all bower dependencies in the `./component` path (default would be `./bower_components`)

```
# cd components/jquery.sparkline
make
```

After that you should have a file ```jquery.sparkline.js``` in the path ```components/jquery.sparkline/dist```

## Usage

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <script src="../components/jquery/dist/jquery.min.js"></script>
    <script src="../components/jquery.sparkline/dist/jquery.sparkline.js"></script>
    <script src="../components/angular/angular.min.js"></script>
    <script src="../ng-sparkline-seriesbar.js"></script>
</head>
<body ng-controller="myController">
<div class="wrapper">   
Tracker: <ng-sparkline-seriesbar id="sparky" value="valuespark" height=20 max-points=20></ng-sparkline-seriesbar>
</div>

</body>
</html>
```

where ```valuespark``` is the scope-variable that you dynamically can change. ```ng-sparkline-seriesbar``` can also be applied as an attribute of a ```div``` or other element, in cases where that may be important for layout:

```html
  ...
  <div ng-sparkline-seriesbar id="sparky" value="valuespark" height=20 max-points=20></div>
  ...
```

## Attributes

I tried to wire the most important options for sparklines to attributes:

All sparkline-options that use camel case names need to be translated to dash-delimited attributes:

sparkline-option | attribute | description | example
---|---|---|---
id|id|identifier (required)|id='mysparkline'
value|value|new sparkline value|value=42 - if you use a scope variable, then: value="valiable"
height|height|fixed height (optional)|height=20
barColor|bar-color|color of bars|bar-color='green'
barWidth|bar-width|width of each bar in px|bar-width=4
barSpacing|bar-spacing|pixels between two bars|bar-spacing=1
tooltipPrefix|tooltip-prefix|prefix to tooltip|tooltip-prefix='Speed:'
tooltipSuffix|tooltip-suffix|suffix to tooltip|tooltip-suffix='kBytes/s'
numberDigitGroupSep|number-digit-group-sep|seperator for digit group|number-digit-group-sep=','
numberDecimalMark|number-decimal-mark|decimal seperator|number-decimal-mark='.'
maxPoints|max-points|maximum number of bars to display|max-points=10
chartRangeMin|chart-range-min|Minimum Value to display|chart-range-min=0
chartRangeMax|chart-range-max|Maximum Value to display|chart-range-max=100
tooltipClassname|tooltip-classname|Create your own CSS class for tooltips|see DEMO
points|points||points="[1,2,3,4,5,6,5,4,3,2,1]"
tooltipValueLookups|tooltip-value-lookups||tooltip-value-lookups="[Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday]"


## Special attributes

colorMap is a special attribute, because this would require an object ... so I came up wih this solution:

To use e.g. this sparkline range map (different colors for different value ranges):

```
	{
      '0:60' : 'green',
      '61:75' : 'yellow',
      '75:' : 'red'
    }
```

you need to transfor it to a string like the following:

```
color-map="0-60-green 61-75-yellow 76-100-red"
```

Of course you also can use rgb-colors (like #ffbb00). The first sparkline in the demo makes use of this attrubute. Hope, this example makes it clear ;-)

## Demo

in the ```demo``` directory you have a simple app, that demonstrates two different sparkline-bartracks with different options. Just try it.

## Version history

| Version        | Date           | Comment  |
| -------------- | -------------- | -------- |
| 1.1.0          | 2017-03-04     | added "points" attribute to initialize sparkline |
| 1.0.0          | 2015-09-27     | first official final version. Updated name, docs |
| 0.0.4          | 2014-09-15     | usable as div (attribute), small changes, updated docs |
| 0.0.3          | 2014-03-17     | added init option (initialize with 0 values) |
| 0.0.2          | 2014-03-14     | name change of component, added options chartRangeMin, chartRangeMax |
| 0.0.1          | 2014-03-11     | initial release |

## Comments

If you have ideas or comments, please do not hesitate to contact me.

Sincerely,

Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com)

## Credits

Written by Sebastian Hildebrandt [sebhildebrandt](https://github.com/sebhildebrandt)

## License [![MIT license][license-img]][license-url]

>The [`MIT`][license-url] License (MIT)
>
>Copyright &copy; 2015 Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com).
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.

[license-url]: https://github.com/sebhildebrandt/ng-sparkline-seriesbar/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

[release-img]: https://img.shields.io/github/release/sebhildebrandt/ng-sparkline-seriesbar.svg?style=flat-square
[issues-img]: https://img.shields.io/github/issues/sebhildebrandt/ng-sparkline-seriesbar.svg?style=flat-square
