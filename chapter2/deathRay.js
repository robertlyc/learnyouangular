function DeathRayController($scope) {
  $scope.menuState = { show: false };
  
  $scope.toggleMenu = function() {
    $scope.menuState.show = !$scope.menuState.show;
  }
  
  $scope.isDisabled = false;
  $scope.stun = function() {
    $scope.isDisabled = true;
  }
  
}