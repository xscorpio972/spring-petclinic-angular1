import {Type} from "./type";
import {Visit} from "../visits/visit";

export interface Pet {
    id: number;
    name: string;
    birthDate: Date;
    new: boolean;
    type: Type;
    owner: string;
    visits: Visit[];
}