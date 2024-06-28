import { Component, ViewChild } from '@angular/core';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateDrivenForm';

  firstName:string ='';
  lastName:string='';
  // eMail:string='';
  dob:string='';
  emailAddress: string='';
  country:string='';
  gender:string='';
   city:string='';
  region:string='';
  postal:string='';
  userName:string='';
  IsAgreed: boolean=false;

  
  defaultCountry:string= 'India';
  defaultGender:string='male';

  @ViewChild('registrationForm') form!: NgForm;


  // OnFormSubmitted(){
  //   console.log(this.form);
  //   this.form.value.firstname;
  //   this.form.value.lastname;
  //   this.form.value.email;
  //   this.form.value.address.country;
  //   this.form.value.address.city;
  //   this.form.value.address.region;
  //   this.form.value.addre.postal;
  //   this.form.value.username;
  //   this.form.value.dob;
  //   this.form.reset();
  // }
  OnFormSubmitted() {
    console.log(this.form);
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.dob=this.form.value.date;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.userName = this.form.value.username;
    this.IsAgreed=this.form.value.agreement;
    // this.form.reset();
  }

  genders=[
    {id:'check-male',value:'male',display:'Male'},
    {id:'check-female',value:'female',display:'Female'},
    {id:'check-other',value:'other',display:'Prefer not to say'}
  ]

  GenerateUsername(){
    let username='';
    if(this.firstName.length>=3){
      username+=this.firstName.slice(0,3);
    }
    else{
      username+=this.firstName;
    }

    if(this.lastName.length>=3){
      username+=this.lastName.slice(0,3);
    }
    else{
      username+=this.lastName;
    }

    let datetime=new Date(this.dob);
    username+=datetime.getFullYear();

    username.toLowerCase();
    // console.log(username);
    // this.form.value.username=username;

    // this.form.setValue(
    //   {
    //     firstname:this.form.value.firstname,
    //     lastname:this.form.value.lastname,
    //     email:this.form.value.email,
    //     number:this.form.value.number,
    //     date:this.form.value.date,
    //     gender:this.form.value.gender,
    //     username:username,
    //     address:{
    //       streetAddress:this.form.value.streetAddress,
    //       streetAddress2:this.form.value.streetAddress2,
    //       country:this.form.value.country,
    //       city:this.form.value.city,
    //       region:this.form.value.region,
    //       postal:this.form.value.postal
    //     }
    
    //   }
    // )

    this.form.form.patchValue({
      username:username,
      // address:{
      //   country: 'Japan'
      // }
    })

    // this.form.reset();


  }
}
