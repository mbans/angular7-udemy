import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',

    //This can be harwired html or file
    template: `<h2>{{title}}</h2>
               <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
               </ul>
               <button class="btn btn-primary">Save</button>
               <br>
               <button [style.backgroundColor]="isActive ? 'blue' : 'green'"  class="btn btn-primary">Inline</button>
               <br>
               Pipe title {{ title | uppercase |lowercase }
               <br>
               Custom summary pipe {{ longValue | summary:'5' }}
               `

})
export class CoursesComponent {
    title = "List of courses!";
    courses;
    isActive = false;
    longValue = "This is a very long value we want summarised";

    /**
     * 
     * @param service - (auto injected as set as a 'provider' within app.module.ts)
     */
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }   

}