export class HttpService {
    constructor($http) {
        this.name = "HttpService";
        this.$http = $http;
    }
    getData(api_url){
      return this.$http.get(api_url)
        .then(
          (response) => response,
          (error) => error
        );
    }
}
