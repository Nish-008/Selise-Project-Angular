import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-productlist', 
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  // displayedColumns: string[] = ['productName', 'category', 'price', 'quantity','isBestArchieved','createdDate'];
  // dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', 'category', 'price', 'quantity','isBestArchieved','createdDate'];
  dataSource = ELEMENT_DATA;
  prodData: any;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  
  constructor(public dialog: MatDialog, private api: ApiService) {}
  ngOnInit(): void {
   this.getAllProduct();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '30%'
    });
  
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getAllProduct(){
    this.api.getProduct().subscribe(result=>{
      this.prodData = result;
    })
  }

// getAllProduct(){
//   this.api.getProduct()
//   .subscribe({
//     next:(res)=>{
//       console.log(res);
//       this.dataSource= new MatTableDataSource(res);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort= this.sort;
//     }
//   })
// }

}