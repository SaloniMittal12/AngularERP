
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HrAreaComponent } from './components/hr/hr-area/hr-area.component';
import { PayrollAreaComponent } from './components/payroll/payroll-area/payroll-area.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
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
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'home', component: HomeComponent },
            { path: 'Contact-form', component: ContactComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'hr-area', component: HrAreaComponent }, 
            { path: 'payroll-area', component: PayrollAreaComponent }, 
            { path: 'production', component: ProductionAreaComponent }, 
            { path: 'inventory', component: InventoryAreaComponent }, 
            { path: 'general-ledger', component: GeneralLedgerAreaComponent }, 
            { path: 'purchase', component: PurchaseAreaComponent }, 
            { path: 'sale', component: SaleAreaComponent },
            { path: 'fixed-assets', component: FixedAssetsAreaComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
