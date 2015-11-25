function MyController(app){
    app.controller('HomeCtrl', ['$scope', '$log', function ($scope, $log) {
        $scope.$log = $log;
        $scope.message = 'Hello ';
    }]);
}