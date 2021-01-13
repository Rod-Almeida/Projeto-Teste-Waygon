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

  constructor(private service: UserListService,
              private router: Router) { }

  ngOnInit(): void {
    this.createList();
    this.index = localStorage.getItem('index'
    )
    console.log(this.index)
  
  }
  createList(){
    this.service.createList().subscribe((res: any) => {
      this.userList = res;
      console.log('details: ', res)
    })
  }

  back(){
    this.router.navigate(['/']);
  }

}
