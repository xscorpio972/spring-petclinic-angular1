import {VisitsFormService} from "./visits-form.service";
import {Visit} from "../visit";

export class VisitsFormController {

    public static $inject: [string] = ["visitsFormService",  "$state"];
    private visits: Visit[];
    private visit: Visit;
    
    constructor(private visitsFormService: VisitsFormService, private $state: ng.ui.IStateService){        
    }
    
    $onInit() {
//        if (!this.$state.params["visitsId"]) {
//            this.visits = <Visit>{};
//        } else {
            this.visit = <Visit>{
                date: new Date()    
            };
            this.visitsFormService.get(this.$state.params["ownerId"], this.$state.params["petId"]).then(visits => this.visits = visits);
//        }
    }
    
    submit() {
        this.visitsFormService.create(this.$state.params["ownerId"], this.$state.params["petId"], this.visit).then(() => this.$state.go("owners", { ownerId: this.$state.params["ownerId"] }));    
    }
}
