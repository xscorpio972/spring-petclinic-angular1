import {VetListService} from "./vet-list.service";
import {Vet} from "../vet";

export class VetListController {

    public static $inject: [string] = ["vetListService"];
    private vets: Array<Vet>;
    
    constructor(private vetListService: VetListService){        
    }
    
    $onInit() {
        this.vetListService.get().then(vets => this.vets = vets);
    }
}
