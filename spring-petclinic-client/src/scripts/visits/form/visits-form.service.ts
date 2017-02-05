import {Visit} from "../visit";

export class VisitsFormService {
  
    public static $inject: [string] = ["$http", "$q"];
    
    constructor(private $http: ng.IHttpService,  private $q: ng.IQService){
    }
    
    get(ownerId: number, petId: number): ng.IPromise<Visit[]> {
         return this.$q(resolve => {
             let url: string = "owners/" + ownerId + "/pets/" + petId + "/visits";
             this.$http.get(url).then(response => {
                return resolve(response.data);
            });
        });
    }  
    
    create(ownerId: number, petId: number, visit: Visit) : ng.IPromise<Visit> {
         return this.$q(resolve => {
            let req;
            let url: string = "owners/" + ownerId + "/pets/" + petId + "/visits";
            req = this.$http.post(url, visit);
            req.then(response => {
                return resolve(response.data);
            });
        });
    }
}