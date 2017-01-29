config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
  $stateProvider
            .state('owners', {
                parent: 'app',
                url: '/owners',
                template: '<owner-list></owner-list>'
            })
}