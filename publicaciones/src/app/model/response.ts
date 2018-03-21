import { publicacion } from "./publicacion";

export interface ResponseSearch{
    data?: Array<publicacion>,
    count?: number,
    pages?: number
}