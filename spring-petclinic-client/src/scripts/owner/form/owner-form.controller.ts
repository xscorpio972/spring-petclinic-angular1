import {OwnerFormService} from "./owner-form.service";
import {OwnerDetailsService} from "../details/owner-details.service";
import {Owner} from "../owner";

export class OwnerFormController {

    public static $inject: [string] = ["ownerFormService", "ownerDetailsService", "$state"];
    private owner: Owner;
    
    constructor(private ownerFormService: OwnerFormService, private ownerDetailsService: OwnerDetailsService, private $state: ng.ui.IStateService){        
    }
    
    $onInit() {
        if (!this.$state.params["ownerId"]) {
            this.owner = <Owner>{};
        } else {
            this.ownerDetailsService.get(this.$state.params["ownerId"]).then(owner => this.owner = owner);
        }
    }
    
    submitOwnerForm() {
        this.ownerFormService.createOrUpdate(this.owner).then(() => this.$state.go('owners'));    
    }
}
