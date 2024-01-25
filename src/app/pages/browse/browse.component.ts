import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{

  constructor(private loginService: LoginService , private router: Router , private toast:ToastrService) {
  }

  ngOnInit() {
  }
}
