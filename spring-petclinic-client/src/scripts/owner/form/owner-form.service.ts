import {Owner} from "../owner";

export class OwnerFormService {
  
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
    
    createOrUpdate(owner: Owner) : ng.IPromise<Owner> {
         return this.$q(resolve => {
            let id = owner.id;
            let req;
            if (id) {
                req = this.$http.put("owner/" + id, owner);
            } else {
                req = this.$http.post("owner", owner);
            }
            req.then(response => {
                return resolve(response.data);
            });
        });
    }
}