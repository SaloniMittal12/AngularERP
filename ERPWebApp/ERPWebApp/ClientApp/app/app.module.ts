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
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HrAreaComponent } from './components/hr/hr-area/hr-area.component';
import { PayrollAreaComponent } from './components/payroll/payroll-area/payroll-area.component';
import { ProductionAreaComponent } from './components/production/production-area/production-area.component';
import { InventoryAreaComponent } from './components/inventory/inventory-area/inventory-area.component';
import { GeneralLedgerAreaComponent } from './components/general-ledger/general-ledger-area/general-ledger-area.component';
import { PurchaseAreaComponent } from './components/purchase/purchase-area/purchase-area.component';
import { SaleAreaComponent } from './components/sales/sale-area/sale-area.component';
import { FixedAssetsAreaComponent } from './components/fixed-assets/fixed-assets-area/fixed-assets-area.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        HeaderComponent,
        HrAreaComponent,
        PayrollAreaComponent,
        ProductionAreaComponent,
        InventoryAreaComponent,
        GeneralLedgerAreaComponent,
        PurchaseAreaComponent,
        SaleAreaComponent,
        FixedAssetsAreaComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
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