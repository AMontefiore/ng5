import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router'
import { DataService } from "../data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  goals: any;

  /**
   * Create an instance of the following dependencies through dependency injection
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {DataService} _data
   */
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //Grabbing the url param when the component is loaded
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => console.log(res.id))
  }

  /**
   *  Returns the user to the home page.
   */
  sendMeHome() {
    this.router.navigate(['']);
  }

}
