import { Component, OnInit } from '@angular/core';
import { UserListService } from './../user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userList: Array<any>;
  index: any;
  lat;
  lng;
  zoom = 15;

  constructor(private service: UserListService,
              private router: Router) { }

  ngOnInit(): void {
    this.createList();
  }

  createList(){
    this.service.createList().subscribe((res: any) => {
      this.userList = res;
      this.index = localStorage.getItem('index')
      this.lat = Number(this.userList[this.index].address.geo.lat)
      this.lng = Number(this.userList[this.index].address.geo.lng)
    })
  }

  back(){
    this.router.navigate(['/']);
  }

}
