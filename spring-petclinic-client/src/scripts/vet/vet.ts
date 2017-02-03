import {Person} from "../common/person";
import {Specialty} from "./specialty";

export interface  Vet extends Person{
    specialties: Specialty [];
}