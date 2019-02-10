import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'summary'     //The name of the pipe e.g. {{ aValue | summary }}
})
export class PipeSummary implements PipeTransform {

    transform(value: any, limit?: number) {
        if(!value) {
            return null;
        }
        let actualLimit = (limit) ? limit :     10;
        return value.substr(0, actualLimit) + '...';
    }
}