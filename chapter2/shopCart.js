function CartController($scope) {
  $scope.bill = {};
  
  $scope.items = [
    {title: 'Paint pots', quantity: 8, price: 3.95},
    {title: 'Polka dots', quantity: 17, price: 12.95},
    {title: 'Pebbles', quantity: 5, price: 6.95}
  ];
  
  // $scope.remove = function(index) {
  //   $scope.items.splice(index, 1);
  // }
  
  var calculateTotal = function () {
    var total = 0;
    for (var i = 0; i < $scope.items.length; i++ ) {
      total = total + $scope.items[i].price * $scope.items[i].quantity;
    }
    $scope.bill.total = total;
    $scope.bill.discount = total > 100 ? 10 : 0;
    $scope.bill.subtotal = total - $scope.bill.discount;
  }
  
  $scope.$watch('items', calculateTotal, true);
}