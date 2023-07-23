import { Component } from '@angular/core';
import{FormControl,FormControlName,FormGroup,Validators} from '@angular/forms'
// import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// import { map } from 'rxjs/operators';  
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    idint:new FormControl('',[Validators.required,Validators.minLength(4)]),

  });
callpar(){
  alert('success');
}
  login(){
    console.log(this.loginForm.value)
  }
  get nam(){
   return this.loginForm.get('name');
  }
  get pass(){
    return this.loginForm.get('password');
   }
   get id(){
    return this.loginForm.get('idint');
   }
  //  of(1,2,3).pipe(map(v=>v+10)).subscribe(console.log);
  // const nums = of(1, 2, 3);

  // const squareValues = map((val: number) => val * val);
  // const squaredNums = this.squareValues(this.nums);
  
  // squaredNums.subscribe(x => console.log(x));
}
