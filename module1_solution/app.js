(function(){
  'use strict';

 angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var items = '';
    var fontColorCSSClass = "";
    var bgColorCSSClass = "";

    $scope.message="Enter your lunch selections, please.  Empty selections ignored";
    $scope.fontColorCSSClass = fontColorCSSClass;
    $scope.bgColorCSSClass = bgColorCSSClass;

    var checkTooMuch = function(items){
      var message = 'default value in checkTooMuch';

      var strSegments = [];
      if (typeof items !== "undefined" && items != null) {
        // strSegments = items.split(sep);
        // strip white spaces - do not enclose reg-exp in strings!
        //// the substring in regexp does not quite work as I wanted -
        // the match always returns the full match not the substring within the
        // paren.  But it returns the right result in any case.
        var reg_exp = /(\w+[\s\w]*),*/g;
        strSegments = items.match(reg_exp);
      }

      // strSegments can be null if no matches or empty array (?possible)
      // Test for both
      if (strSegments == null || strSegments.length == 0) {
        message = "Please enter data first";
        fontColorCSSClass = "text-warning";
        bgColorCSSClass = "bg-warning";  // no color
      } else if (strSegments.length>3){
         message = "Too Much";
         fontColorCSSClass = "text-success";
         bgColorCSSClass = "bg-success";  // no color
      }
      else {
         message = "Enjoy!";
         fontColorCSSClass = "text-success";
         bgColorCSSClass = "bg-sucess";  // no color
      }
      $scope.message = message;
      $scope.fontColorCSSClass = fontColorCSSClass;
      $scope.bgColorCSSClass = bgColorCSSClass;
    }

    $scope.items = items;
    $scope.checkTooMuch = checkTooMuch;
    // $scope.message = message;


  }
})();
