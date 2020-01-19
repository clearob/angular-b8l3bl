import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
   loading = false;
    submitted = false;
   

    constructor(
        
        private route: ActivatedRoute,
        private router: Router,
        
    ) {
        
    }

    ngOnInit() {
       
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
       
    }

    
    private onSubmit() {
    this.submitted = true;
        
        // stop here if form is invalid
       
       
        this.loading = true;
        
         data => {
                   
                    this.router.navigate(['/product']);
         }            
    }    
}