import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import * as parameterData from './data.json';

@Component({templateUrl: 'sales.component.html'})
export class SalesComponent implements OnInit {
   salesForm: FormGroup;
    loading = false;
    submitted = false;
    
    _object ;
    jsonData:any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        
    ) { 
        
    }

    ngOnInit() { 
     //this.jsonData = parameterData.default;
     
      this.jsonData = [
        parameterData.default.values[0],
        parameterData.default.values[1]
      ];
      this._object = Object;
   
    }

    
    
    
    onSubmit() {
        // stop here if form is invalid
        this.submitted = true;
      
       this.loading = true;
       
    
    }
}
