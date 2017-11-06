const applicationsList = require("../../../assets/data/applications.json");
const environmentsList = require("../../../assets/data/environments.json");

class HomeController {
  constructor(httpService, $scope) {
    this.name = 'home';
    this.baseURL = "//st1w3195:8091/jenkins-monitor/api";
    this.environmentsKey = "/environments/";
    this.applicationsKey = "/applications/";
    this.httpService = httpService;
    this.environments = [];
    this.applications = [];
    this.buildStats = [];
    this.$scope = $scope;
    this.toggleError = false;
    this.toggleStats = false;
    this.processSelection = function($item, $model) {
      if (this.applications.selected && this.environments.selected) {
        this.generateStats(this.environments.selected, this.applications.selected);
      }
    };
    this.processData = function(data) {
      if(data === null || typeof data === "undefined"){
        return "NO DATA";
      }
      return data;
    };
  }
  $onInit() {
    angular.extend(this.environments, environmentsList);
    angular.extend(this.applications, applicationsList);
  }
  getURL(environment, application) {
    return this.baseURL + this.environmentsKey + environment.path + this.applicationsKey + application.path;
  }
  generateStats(environment, application) {
    var api_url = this.getURL(environment, application);
    this.httpService.getData(api_url).then((response) => {
      angular.extend(this.buildStats, response.data);
      if (response.data) {
        this.toggleStats = true;
      }else{
        this.toggleError = true;
      }
    }, (error) => {
      this.toggleError = true;
      throw error;
    });
  }
}

export default HomeController;
