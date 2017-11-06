import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';
import Common from './common/common';
import Services from './services/services';
import Components from './components/components';
import AppComponent from './app.component';

import 'bootstrap-sass';

angular.module('app', [
    uiRouter,
    ngSanitize,
    Common,
    Services,
    Components,
]).config(() => {
    "ngInject";
}).component('app', AppComponent);
