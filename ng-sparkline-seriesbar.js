angular.module("charts.ng.sparkline.seriesbar", [])
    .directive('ngSparklineSeriesbar', function () {
        'use strict';
        return {
            restrict: 'EA',
            scope: {
                id: '@',
                value: '=',
                height: '@',
                barColor: '@',
                barWidth: '@',
                barSpacing: '@',
                tooltipSuffix: '@',
                tooltipPrefix: '@',
                tooltipValueLookups: '=',
                numberDigitGroupSep: '@',
                numberDecimalMark: '@',
                colorMap: '@',
                points: '=',
                maxPoints: '=',
                chartRangeMin: '@',
                chartRangeMax: '@',
                tooltipClassname: '@',
                init: '@'
            },
            template: '<span id="{{id}}-sparktracker">Loading</span>',
            replace: false,
            link: function ($scope, $element, $attrs) {

                var render = function () {

                    var colorMap = null;
                    if (typeof $scope.colorMap !== 'undefined') {
                        var customColors = {};
                        var csParse = $scope.colorMap.split(' ')
                        csParse.forEach(function($element){
                            $element = $element.split('-');
                            customColors[$element[0] + ':' + $element[1]] = $element[2]
                        });
                        colorMap = $.range_map(customColors);
                    }

                    $element.sparkline($scope.myPoints, { 
                        type: 'bar',
                        height: $scope.height || 20,
                        barColor: $scope.barColor || '#3f7f00',
                        barWidth: $scope.barWidth || 4,
                        barSpacing: $scope.barSpacing || 1,
                        tooltipSuffix: angular.isDefined($scope.tooltipSuffix) ? ' ' + $scope.tooltipSuffix : '',
                        tooltipPrefix: angular.isDefined($scope.tooltipPrefix) ? $scope.tooltipPrefix + ' ' : '',
                        tooltipFormat: angular.isDefined($scope.tooltipValueLookups) ? '{{offset:offset}} {{value}}' : '{{value}}',
                        tooltipValueLookups: {
                            'offset': $scope.tooltipValueLookups
                        },
                        numberDigitGroupSep: $scope.numberDigitGroupSep,
                        numberDecimalMark: $scope.numberDecimalMark,
                        colorMap: colorMap,
                        chartRangeMin: angular.isDefined($scope.chartRangeMin) ? $scope.chartRangeMin : undefined,
                        chartRangeMax: angular.isDefined($scope.chartRangeMax) ? $scope.chartRangeMax : undefined,
                        tooltipClassname: angular.isDefined($scope.tooltipClassname) ? $scope.tooltipClassname : undefined
                    });
                }

                $scope.myPoints = $scope.myPoints || $scope.points || [];
                if ($scope.init) {     // init with 0 values
                    if ($scope.myPoints.length > $scope.maxPoints) {
                        $scope.myPoints.splice($scope.maxPoints);
                    } else {
                        while ($scope.myPoints.length < $scope.maxPoints) {
                            $scope.myPoints.push(0);
                        }
                    }
                }

                render();

                $scope.$watch('value', function (updatedValue, oldValue, $scope) {
                    $scope.myPoints.push(updatedValue);    
                    $scope.myPoints = $scope.myPoints.filter(function(e) {return e !== undefined})

                    if ($scope.myPoints.length > $scope.maxPoints)
                        $scope.myPoints.splice(0,1);
                    render();
                }, true);

            }
        }
    })