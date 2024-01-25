import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email!:string;
  password!:string;



  type: string = "password"
  isText: boolean = false;
  eyeIcon:string = 'Show'



  constructor(private loginService:LoginService , private router: Router , private toast:ToastrService) {
  }

  ngOnInit() {
    if (this.loginService.IsLoggedIn){
      this.router.navigateByUrl('/browse')
    }

  }

  onsubmit(){
    console.log(this.email,this.password)
    //validate email and password
    if (!this.email || !this.password){
      this.toast.info("Input email and password")
      return;
    }
    //if email and password is correct lets login the user
    this.loginService.login(this.email,this.password);

    //now we are logged in so we will redirect to browser page
    this.router.navigateByUrl('/browse')
    this.toast.success("Login Successful ")

  }


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "Hide" : this.eyeIcon = "Show";
    this.isText ? this.type = "text" : this.type = "password"

  }

  visibility: string = 'hidden';

  toggleEyeIconVisibility() {

    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';

  }



}
