import {OwnerListService} from "./owner-list.service";
import {Owner} from "../owner";

export class OwnerListController {

    public static $inject: [string] = ["ownerListService"];
    private owners: Array<Owner>;
    
    constructor(private ownerListService: OwnerListService){        
    }
    
    $onInit() {
        this.ownerListService.get().then(owners => this.owners = owners);
    }
}
