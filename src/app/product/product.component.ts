import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services';


@Component({templateUrl: 'product.component.html'})
export class ProductComponent implements OnInit {
    productForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService
    ) { 
        
    }

    ngOnInit() {
         this.productForm = this.formBuilder.group({
            name: ['', Validators.required],
            id: ['',Validators.compose([ Validators.required,Validators.pattern('[0-9]*')])],
            salesDate: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.productForm.controls; }
    
    onSubmit() {
        // stop here if form is invalid
        this.submitted = true;
        if (this.productForm.invalid) {
            return;
        }
       

        
       this.loading = true;
        error => {
                    this.alertService.error(error);
                    this.loading = false;
                };
    
    }
}
