app.controller('userMoviesCtrl', function ($scope, movieFactory) {
    var year = new Date().getFullYear();
    var range = [];
    for (var i = 34; i > 0; i--) {
        range.push(year - i);
    }
    $scope.years = range;
    $scope.userMoviesList = movieFactory.userMoviesList;
    $scope.userCurrency = movieFactory.userCurrency;
    $scope.showMidBanner = movieFactory.showMidBanner;
    $scope.showTrashIcon = true;
    $scope.showCheckIcon = false;
    $scope.trashIconClick = function () {
        $scope.showTrashIcon = false;
        $scope.showCheckIcon = true;
    }
    $scope.checkIconClick = function () {
        $scope.showTrashIcon = true;
        $scope.showCheckIcon = false;
    }
    $scope.removeFromUserList = function (data) {
        movieFactory.removeFromUserList(this);
        if (movieFactory.userMoviesList.length === 0) {
            $scope.showMidBanner.check = true;
        }
    }
    $scope.clearYear = function(){
        $scope.selectedYear = undefined;
    }
});