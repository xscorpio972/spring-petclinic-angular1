config.$inject = ["$stateProvider", "$urlRouterProvider"];

export function config($stateProvider: angular.ui.IStateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
             $stateProvider
                .state('ownerNew', {
                    parent: 'app',
                    url: '/owners/new',
                    template: '<owner-form></owner-form>'
                })
                .state('ownerEdit', {
                    parent: 'app',
                    url: '/owners/:ownerId/edit',
                    template: '<owner-form></owner-form>'
                });
}