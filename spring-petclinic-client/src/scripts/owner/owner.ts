import {Person} from "../common/person";
import {Pet} from "../pet/pet";

export interface Owner extends Person{
    address: string;
    city: string;
    new: boolean;
    telephone: string;   
    pets : Pet [];
}