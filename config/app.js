/**
 * Mapp1
 */
(function () {
    angular.module('Mapp1', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
    ])
})();


function getBaseURL() {
	   return location.protocol + "//" + location.hostname + 
	      (location.port && ":" + location.port) ;
}; 
function getAppName(p) {
   return "/";
}
var _appUrl = getBaseURL()+getAppName(window.location.pathname);

