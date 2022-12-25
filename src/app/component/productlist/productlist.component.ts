import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-productlist', 
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  // displayedColumns: string[] = ['productName', 'category', 'price', 'quantity','isBestArchieved','createdDate'];
  // dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['productName', '_id','category', 'price', 'quantity','isBestArchieved','action'];
  dataSource: any;
  prodData: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
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
      this.dataSource= new MatTableDataSource(this.prodData)
      this.dataSource.paginator = this.paginator;
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