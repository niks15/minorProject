var minorApp = angular.module('minorApp',[]);
minorApp.controller('AppCtrl',['$scope', '$http', '$window', function($scope, $http, $window){

    var refresh = function() {

        var img1 = "Data/most-beautiful-landscapes-in-europe-copyright-vicky-sp-european-best-destinations.jpg";
        var img2 = "Data/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg";
        var img3 = "Data/most-beautiful-landscapes-in-europe-the-dolomites-in-tyrol-copyright-ttstudio-european-best-destinations.jpg";
        var img4 = "Data/jgbFbWR.jpg";

        var a1 = "qwerty";
        $scope.testText = a1;
        $scope.imgSrc1 = img1;
        $scope.imgSrc2 = img2;
        $scope.imgSrc3 = img3;
        $scope.imgSrc4 = img4;
        console.log("qwerty");
    };

    refresh();

    $scope.searchIt = function(){

        var ids = $scope.searchText;
        console.log(ids);

        $http.get('/loadPage/' + ids).success(function(response){

            console.log(response);

        });

    };

}]);