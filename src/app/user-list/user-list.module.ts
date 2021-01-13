import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListService } from './user-list.service';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserListComponent } from './user-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  providers: [UserListService],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAw7Hr7ZbGpJUEVCDkw_V_fhtrvHvXMHP4'
    })
  ]
})
export class UserListModule { }
