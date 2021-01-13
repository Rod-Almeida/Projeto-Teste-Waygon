import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { UserListService } from './user-list.service';
import { Router } from '@angular/router';

export interface UserList
{
    id: Number;
    name: String;
    username: String;
    email: String;
    address: {
      street:String;
      suite: String;
      city: String;
      zipcode: String;
      geo: {
        lat: String;
        lng: String;
      }
    };
    phone: String;
    website: String;
    company: {
      name: String;
      catchPhrase: String;
      bs: String;
    }
}

const ELEMENT_DATA: UserList [] = [];

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, AfterViewInit {
  userList: Array<UserList> = [];

  constructor(private userListService: UserListService,
              private router: Router,
    ) {}

  ngOnInit(): void {
    this.createList();
  }

  ngAfterViewInit() {
    this.createList();
  }

  displayedColumns: string[] = ["select", "id", "username", "email", "details"];
  dataSource = new MatTableDataSource<UserList>();
  selection = new SelectionModel<UserList>(true, []);


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: UserList): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${(String(row.id) + 1)}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createList() {
    this.userListService.createList().subscribe((res: any) => {
      this.userList = res;
      this.dataSource = new MatTableDataSource<UserList>(this.userList)
    });
  }

  goToDetails(i){
    this.router.navigate(['/details']);
    localStorage.setItem('index', i)
  }

}
