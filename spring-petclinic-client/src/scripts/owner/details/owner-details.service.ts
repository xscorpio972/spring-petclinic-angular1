import {Owner} from "../owner";

export class OwnerDetailsService {
  
    public static $inject: [string] = ["$http", "$q"];
    
    constructor(private $http: ng.IHttpService,  private $q: ng.IQService){
    }
    
    get(id: number): ng.IPromise<Owner> {
         return this.$q(resolve => {
             this.$http.get('owner/' + id).then(response => {
                return resolve(response.data);
            });
        });
    }    
}