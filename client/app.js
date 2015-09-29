var app = angular.module("MyFirstAngular", []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.demList = [];
    $scope.repList = [];
    var newPresident = [];
    $scope.winner = [];
    $scope.loadCandidates = function(){
        console.log("loadCandidates");
        $http.get('/getdemocrats').then(function(response){
            $scope.demList = response.data;
            newPresident.push($scope.demList);
            //console.log(newPresident);
        });
        $http.get('/getrepublicans').then(function(response){
            $scope.repList = response.data;
            console.log(response.data);
            newPresident.push($scope.repList);
            console.log(newPresident);
        });
    };
    $scope.electPresident = function(){
        var demOrep = findWinner(0,1);
        var pick = findWinner(0,4);
        $scope.winner = (newPresident[demOrep][pick]);

    };
    function findWinner(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}]);
