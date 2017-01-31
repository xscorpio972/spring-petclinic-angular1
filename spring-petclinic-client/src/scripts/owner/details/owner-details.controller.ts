import {OwnerDetailsService} from "./owner-details.service";
import {Owner} from "../owner";

export class OwnerDetailsController {

    public static $inject: [string] = ["ownerDetailsService", "$state"];
    private owner: Owner;
    
    constructor(private ownerDetailsService: OwnerDetailsService, private $state: ng.ui.IStateService){        
    }
    
    $onInit() {
        this.ownerDetailsService.get(this.$state.params["ownerId"]).then(owner => this.owner = owner);
    }
}
