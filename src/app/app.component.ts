import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("myForm") form: NgForm;
  defaultCourse = "Angular";
  username = "";
  defaultGender = "Male";
  genders = [{
    id: 1,
    value: "Male"
  }, {
    id: 2,
    value: "Female"
  }]

  submitted: boolean = false;

  formData = {
    username: "",
    email: "",
    course: "",
    gender: ""
  }

  constructor() { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
    this.submitted = true;

    this.formData.username = this.form.value.userDetails.username;
    this.formData.email = this.form.value.userDetails.email;
    this.formData.course = this.form.value.course;
    this.formData.gender = this.form.value.gender;

    this.form.reset();
  }

  setValues() {
    this.form.setValue({
      userDetails: {
        username: "Sudhakar",
        email: "sanagar.sudhakar@gmail.com"
      },
      course: "Html",
      gender: "Male"
    })
  }

  pathchValues() {
    this.form.form.patchValue({
      userDetails: {
        username: "Rupesh"
      }
    })
  }
}
