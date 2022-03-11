import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OperationsService } from 'app/shared/services/operations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';



@Component({
  selector: 'app-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.css']
})
export class PreordersComponent implements AfterViewInit {


 id
 personaje
 

  constructor(
    public router : Router,
    private activatedRoute: ActivatedRoute,
    private operationService: OperationsService
  ) {

  }

  ngAfterViewInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(params => {

        if (params['id']) {
   
          return this.operationService.show(params['id']);
        } else {
          return of(null);
        }
      })
    )
    .subscribe(caracter => {
      if (caracter) {
        console.log("aquui",caracter)


        this.personaje=caracter

      





      }
    });

  }

}
