var app = angular.module('directivePractice');

app.directive('dirDisplay', function() {
    return {
        
        templateUrl: 'app/html-tmpl.html',
        link: function(scope, element, attrs) {
        
          scope: {
              isShowing: true;
          }
            
            
            
            console.log(element);
            
          element.on('click', function() {
              console.log('yeah');
              scope.isShowing = $scope.isShowing;
              scope.$apply();
          })
        
        
        }
    };
    
    
})