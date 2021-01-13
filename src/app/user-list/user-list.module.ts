import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListService } from './user-list.service';


@NgModule({
  declarations: [],
  providers: [UserListService],
  imports: [
    CommonModule
  ]
})
export class UserListModule { }
