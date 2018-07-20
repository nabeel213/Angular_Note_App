
// angular.module('appName').config(function () {
  
// });

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('index', {
        url: '/index',
        component: 'indexComp',
    })

    $stateProvider
    .state('formcomponent', {
        url: '/formcomponent',
        component: 'formComp',
    })
})

// $state.go('formcomponent');
