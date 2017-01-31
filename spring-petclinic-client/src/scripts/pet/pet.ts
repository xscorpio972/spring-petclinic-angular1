import {Type} from "./type";

export interface Pet {
    id: number;
    name: string;
    birthDate: string;
    new: boolean;
    type: Type;   
}