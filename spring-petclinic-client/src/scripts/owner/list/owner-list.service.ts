import {Owner} from "../owner";

export class OwnerListService {
  
    public static $inject: [string] = ["$http", "$q"];
    
    constructor(private $http: ng.IHttpService,  private $q: ng.IQService){
    }
    
    get(): ng.IPromise<Owner[]> {
         return this.$q(resolve => {
            this.$http.get('owner/list').then(response => {
                return resolve(response.data);
            });
        });
    }    
}