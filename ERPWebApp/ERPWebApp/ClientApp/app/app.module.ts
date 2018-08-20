/// <reference path="components/hr/hr-area/hr-area.component.ts" />
/// <reference path="components/hr/hr-area/hr-area.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HrAreaComponent } from './components/hr/hr-area/hr-area.component';
import { PayrollAreaComponent } from './components/payroll/payroll-area/payroll-area.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        HeaderComponent,
        HrAreaComponent,
        PayrollAreaComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'Contact-form', component: ContactComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'hr-area', component: HrAreaComponent },
            { path: 'payroll-area', component: PayrollAreaComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
