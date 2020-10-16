import { Component } from "@angular/core";
import { HttpService } from '../service/http.service'


@Component({
    selector: "activities",
    templateUrl: "./activities.component.html"
})
export class ActivitiesComponent{

    constructor(private http: HttpService) { }
  
    onTap(){
      console.log("adding activity...")
      this.http.addActivity("new NEW ting ting")
        .subscribe(
          (results)=>{console.log(results)},
          (err)=>{console.log(err)},
        );
    }
}
