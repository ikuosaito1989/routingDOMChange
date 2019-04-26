import { Component, OnInit } from "@angular/core";
import { TestService } from "../../test.service";
@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.sass"]
})
export class Child1Component implements OnInit {
  title = this.testService.child1Title;
  child1Img = this.testService.child2Img;
  constructor(public testService: TestService) {}

  ngOnInit() {
    console.log(this.testService.child1Title);
    setTimeout(() => {
      this.title = "child1";
      this.testService.child1Title = this.title;
      this.child1Img = "https://auth.classi.jp//img/pc/auth/logo-classi.png";
      this.testService.child1Img = this.child1Img;
    }, 300);
  }
}
