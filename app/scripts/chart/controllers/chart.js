/* globals */
(function() {
  'use strict';

  function ChartCtrl($scope){

    // Options
    $scope.show = null;
    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Sales';
    $scope.xAxis = '2014';
    $scope.yHeader = 'value';
    // Data
    $scope.data = [
      {
      label: 'January',
      value: 36
      },
      {
      label: 'February',
      value: 54
      },
      {
      label: 'March',
      value: 62
      },
      {
      label: 'April',
      value: 82
      },
      {
      label: 'May',
      value: 96
      },
      {
      label: 'June',
      value: 104
      },
      {
      label: 'July',
      value: 122
      },
      {
      label: 'August',
      value: 152
      },
      {
      label: 'September',
      value: 176
      },
      {
      label: 'October',
      value: 180
      },
      {
      label: 'November',
      value: 252
      },
      {
      label: 'December',
      value: 342
      }
    ];

    $scope.data2 = [
      {
      label: 'January',
      value: 300
      },
      {
      label: 'February',
      value: 154
      },
      {
      label: 'March',
      value: 90
      },
      {
      label: 'April',
      value: 282
      },
      {
      label: 'May',
      value: 20
      },
      {
      label: 'June',
      value: 194
      },
      {
      label: 'July',
      value: 222
      },
      {
      label: 'August',
      value: 162
      },
      {
      label: 'September',
      value: 179
      },
      {
      label: 'October',
      value: 280
      },
      {
      label: 'November',
      value: 302
      },
      {
      label: 'December',
      value: 202
      }
    ];

    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    $scope.max = 0;

    var arrLength = $scope.data.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
        if ($scope.data[i].value > $scope.max)
        $scope.max = $scope.data[i].value;
    }

    var yAxisHeadersSort = function (first, second) {
      return parseInt(first.value) - parseInt(second.value);
    };

    $scope.yAxisHeaders = $scope.data.sort(yAxisHeadersSort);

    $scope.numbers = [];
    var i = 0;
    while(i < $scope.max){
      $scope.numbers.push(i);
      i += 50;
    }
    $scope.numbers.push($scope.max);
  }

  angular.module('angularContactsListApp')
    .controller('ChartCtrl', ChartCtrl);

  ChartCtrl.$inject = ['$scope'];

}());