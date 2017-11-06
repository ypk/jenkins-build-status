import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiSelect from 'ui-select';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter,
    uiSelect
]).config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });
}).component('home', homeComponent).name;

export default homeModule;
