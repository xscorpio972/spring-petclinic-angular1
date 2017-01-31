import {Pet} from "../pet/pet";

export interface Owner {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    new: boolean;
    telephone: string;   
    pets : Pet [];
}