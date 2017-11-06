import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import headerComponent from './header.component';

let headerModule = angular.module('siteHeader', [
  uiRouter
]).component('siteHeader', headerComponent).name;

export default headerModule;
