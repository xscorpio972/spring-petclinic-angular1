import {Vet} from "../vet";

export class VetListService {
  
    public static $inject: [string] = ["$http", "$q"];
    
    constructor(private $http: ng.IHttpService,  private $q: ng.IQService){
    }
    
    get(): ng.IPromise<Vet[]> {
         return this.$q(resolve => {
            this.$http.get('vets').then(response => {
                return resolve(response.data);
            });
        });
    }    
}