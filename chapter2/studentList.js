function ListController($scope) {
  var students = [
    {name: 'Mary Contrary', id: '1'},
    {name: 'Jack Sprat', id: '2'},
    {name: 'Jill Hill', id: '3'}
  ];
  
  $scope.students = students;
  
  $scope.insert = function() {
    $scope.students.splice(1, 0, {name: 'Tom Thumb', id: '4'});
  }
}