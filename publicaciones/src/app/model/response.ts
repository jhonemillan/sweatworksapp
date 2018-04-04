import { Publicacion } from './publicacion';

export interface ResponseSearch {
    data?: Array<Publicacion>;
    count?: number;
    pages?: number;
}
