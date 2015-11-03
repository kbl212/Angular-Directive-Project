var app = angular.module('directivePractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: 'app/html-tmpl.html',
        controller: 'mainCtrl'
        
        
        
    });
    
    $urlRouterProvider.otherwise('/home');
    
    
});
