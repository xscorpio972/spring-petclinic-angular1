import {Pet} from "../pet";
import {Type} from "../type";

export class PetFormService {
  
    public static $inject: [string] = ["$http", "$q"];
    
    constructor(private $http: ng.IHttpService,  private $q: ng.IQService){
    }
    
    getPetTypes(): ng.IPromise<Type []> {
         return this.$q(resolve => {
             this.$http.get('petTypes').then(response => {
                return resolve(response.data);
            });
        });
    }
    
    get(petId: number, ownerId: number): ng.IPromise<Pet> {
         return this.$q(resolve => {
             this.$http.get("owner/" + ownerId + "/pet/" + petId).then(response => {
                return resolve(response.data);
            });
        });
    }  
    
    createOrUpdate(pet: Pet, ownerId: number) : ng.IPromise<Pet> {
         return this.$q(resolve => {
            let id = pet.id;
            let req;
            let data = {
              id: id,
              name: pet.name,
              birthDate: pet.birthDate,
              typeId: pet.type.id  
            };
            if (id) {
                req = this.$http.put("owners/" + ownerId + "/pets/" + pet.id, data);
            } else {
                req = this.$http.post("owners/" + ownerId + "/pets", data);
            }
            req.then(response => {
                return resolve(response.data);
            });
        });
    }
}