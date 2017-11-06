import angular from 'angular';
import {HttpService} from './http-service';

let serviceModule = angular.module('app.services', [])
    .service('httpService', HttpService).name;

export default serviceModule;
