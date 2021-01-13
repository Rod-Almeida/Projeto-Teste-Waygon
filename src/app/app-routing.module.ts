import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component'

const routes: Routes = [
  {
     path: '', component: UserListComponent,
},

{
  path: 'details', component: UserDetailsComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
