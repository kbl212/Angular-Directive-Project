var app = angular.module('directivePractice');



app.controller('mainCtrl', function($scope){
    
    
    
    $scope.canShow = true;
    
    $scope.user = {
        
        name: "Geoff McMammy",
        age: 43,
        email: "geoffdude@gmail.com"
        
    }
    
    
})