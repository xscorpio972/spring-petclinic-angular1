import {Type} from "./type";

export interface Pet {
    id: number;
    name: string;
    birthDate: Date;
    new: boolean;
    type: Type;
    owner: string; 
}