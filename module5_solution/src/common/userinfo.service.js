(function() {
  'use strict';

  angular.module('common')
  .service('UserInfoService', UserInfoService);

  UserInfoService.$inject = ['$filter'];
  function UserInfoService($filter) {

    // Do services have onInit and onDestroy?
    // Need these to persist user info - TBD

    var service = this;
    service.users=[];   // store user info here

    service.addUser = function(user) {
      console.log("In Add User: ", user)
      if (user) {
        // create a copy of user to add to users to avoid Object
        // getting cleared.
        var copyUser = Object.assign({}, user);
        service.users.push(copyUser);
        return true;
      }
      else {
        console.log("Null user in addUser");
        return false;
      }
    }

    service.getUsers = function() {
      return service.users;
    }

    service.getUser = function(email) {
      var results = $filter('filter')(service.users, {"email": email});
      if (results.length >0 ) {
        return results[0];
      }
      else {
        return null;
      }
    }




  }
})();
