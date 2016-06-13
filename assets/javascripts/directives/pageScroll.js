angular.module("RichardLamoste").directive("scroll", function ($window, $document) {
    return  {
        link: function (scope, element, attrs) {
            angular.element($window).bind('scroll', function () {
                var el = element[0];
                var winTop = window.pageYOffset;
                var winHeight = window.innerHeight;
                var divHeight = el.offsetHeight;
                var divTop = el.offsetTop-(divHeight/2);
                var divTotal = divTop+divHeight; 
                //console.log(divHeight/2);
                // console.log($document[0].activeElement.scrollHeight);
                // console.log(winTop);
                // console.log(divTotal);            
                if (winTop >= divTop && winTop <= divTotal) {
                    element.addClass("active");
                    //element.removeClass("nonactive");
                }
                // else {
                //     element.removeClass("active");
                //     element.addClass("nonactive");
                // }
            });
        }        
    }
});

angular.module("RichardLamoste").directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   
            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
            });                                                                              
        }                                                                                    
    }
});