import { Identifier } from '../search/search-request/search-request.component';

export interface InstrumentRequest {
    id: number;
    code: string;
    type: string;
    status: string;
    user: string;
    updated: Date;
}
