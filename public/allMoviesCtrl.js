app.controller('allMoviesCtrl', function ($scope, movieFactory) {
    $scope.allMoviesList = movieFactory.allMoviesList;
    $scope.userCurrency = movieFactory.userCurrency;
    $scope.showMidBanner = movieFactory.showMidBanner;
    $scope.addToUserList = function (data) {
        movieFactory.addToUserList(this);
        $scope.showMidBanner.check = false;
    }
});