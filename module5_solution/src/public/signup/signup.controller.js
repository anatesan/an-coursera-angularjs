(function(){
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['UserInfoService', 'MenuService', '$scope'];
  function SignupController(UserInfoService, MenuService, $scope) {
    var suCtrl = this;
    suCtrl.isFavItemValid = true; //initialization for form
    suCtrl.atLeastOneSubmit = false;

    suCtrl.submit = function() {

      suCtrl.atLeastOneSubmit=true;


      var isValidPromise = MenuService.isItemShortNameValidPromise(suCtrl.user.favItem);
      var isPostThenPromise = isValidPromise
      .then(function (response) {
        console.log("favItem promise success"); // forces promise to finish
        suCtrl.isFavItemValid = true;
        suCtrl.submitSucceeded = true;

        UserInfoService.addUser(suCtrl.user);

        // clear user object so form can get cleared

        suCtrl.submittedUser = Object.assign({}, suCtrl.user); //shallow copy
        for (var member in suCtrl.user) suCtrl.user[member]="";

        // clear touched state in form so we don't trigger validations
        // on every field in form

        var formInTemplate = $scope.signupForm;
        formInTemplate.$setUntouched();
        formInTemplate.$setPristine();
      })
      .catch(function(error) {
        console.log("favItem promise error"); //forces promise to finish
        suCtrl.isFavItemValid = false;
        suCtrl.submitSucceeded = false;
      });

    }

  }
})();
