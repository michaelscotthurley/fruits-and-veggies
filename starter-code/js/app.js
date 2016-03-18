var app = angular.module('FruitsAndVeggies', []);

app.controller('GameCtrl', ['$scope', function($scope) {
  var pool = fruit.concat(vegetables);
  $scope.shufflePool = shuffle(pool);
  $scope.myFruits = [];
  $scope.myVeggies = [];

  $scope.moveRight = function(idx) {
    $scope.myVeggies.push($scope.shufflePool[idx]);
    $scope.shufflePool.splice(idx, 1)
      if ($scope.checkWin()) {
        swal("Congrats!", "You really know your produce!", "success")
      }
      if ($scope.checkWin() == false) {
        swal("Sorry.", "You mixed up your produce.", "error")
      }

    console.log($scope.myVeggies.length);
    console.log($scope.myVeggies);
  }

  $scope.moveLeft = function(idx) {
    $scope.myFruits.push($scope.shufflePool[idx]);
    $scope.shufflePool.splice(idx, 1);
    if ($scope.checkWin()) {
      swal("Congrats!", "You really know your produce!", "success")
    }
    if ($scope.checkWin() == false) {
        swal("Sorry.", "You mixed up your produce.", "error")
      }
    console.log($scope.myFruits.length);
    console.log($scope.myFruits);
  }

  $scope.moveCenterFromLeft = function(idx) {
    $scope.shufflePool.push($scope.myFruits[idx]);
    $scope.myFruits.splice(idx, 1);
  }

  $scope.moveCenterFromRight = function(idx) {
    $scope.shufflePool.push($scope.myVeggies[idx]);
    $scope.myVeggies.splice(idx, 1);
  }

  $scope.checkWin = function() {
    if ($scope.shufflePool.length == 0) {
      for (var i = 0; i < $scope.myFruits.length; i++) {
        if (fruit.indexOf($scope.myFruits[i]) == -1) {
          return false;
        }
      }
      for (var i = 0; i < $scope.myVeggies.length; i++) {
        if (vegetables.indexOf($scope.myVeggies[i]) == -1) {
          return false;
        }
      }
    return true
  }
}

  function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}  

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);
