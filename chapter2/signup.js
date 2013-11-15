function AddUserController($scope) {
  $scope.message = '';
  
  $scope.addUser = function() {
    $scope.message = "Thanks, " + $scope.user.first + ", we added you!";
  };
}