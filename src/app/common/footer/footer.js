import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import footerComponent from './footer.component';

let footerModule = angular.module('siteFooter', [
  uiRouter
]).component('siteFooter', footerComponent).name;

export default footerModule;
