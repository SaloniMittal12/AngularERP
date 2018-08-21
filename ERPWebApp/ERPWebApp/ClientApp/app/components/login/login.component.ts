import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
/** login component*/
export class LoginComponent {
    public href: string = "";
    constructor(private router: Router) { }

    ngOnInit() {
        this.href = this.router.url;
       
        console.log(this.router.url);
    }
}