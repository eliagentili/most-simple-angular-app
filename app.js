angular
    .module('app', [])
    .controller('MyController', function($log) {
        $log.debug('Ciao Mondo!');
    });

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});