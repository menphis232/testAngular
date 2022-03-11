import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OperationsService } from 'app/shared/services/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, BehaviorSubject, of, from } from 'rxjs';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {


  company$: Observable<any[]>;
  itemsPerPage = 5;
  p=1
  constructor(
    private activatedRoute: ActivatedRoute,
    public router : Router,
    private operationService: OperationsService
  ) {
    this.company$ = this.operationService.company$;
  }

  ngOnInit(){

    let param;

    if(this.p)
      { 
        param={page:this.p,per_page:this.itemsPerPage};
      }else{
        param={page:1,per_page:this.itemsPerPage};
      }

    this.loadInitialData(param)

  }


  loadInitialData(params){
    this.operationService.get(params);

    this.company$.subscribe((data)=>{
      let d = []
      if(data && data['data']){
        // d = data['data'];
        data['data'].forEach((element,index) => {
          data['data'][index]['checked']=false;
        });
        console.log(data['data'])
      }
      // console.log(data)
    })
     console.log('arreglo',this.operationService.get(params))
  }

  // detail(row){
  //   console.log(row);
  //   this.router.navigateByUrl("/detail-preorder");
    
  // }




}
