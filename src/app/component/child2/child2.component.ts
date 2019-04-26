import { Component, OnInit } from "@angular/core";
import { TestService } from "../../test.service";
@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.sass"]
})
export class Child2Component implements OnInit {
  title = this.testService.child2Title;
  child2Img = this.testService.child2Img;
  constructor(public testService: TestService) {}

  ngOnInit() {
    console.log(this.testService.child2Title);
    setTimeout(() => {
      this.title = "child2";
      this.testService.child2Title = this.title;
      this.child2Img = "https://auth.classi.jp//img/pc/auth/logo-classi.png";
      this.testService.child2Img = this.child2Img;
    }, 300);
  }
}
