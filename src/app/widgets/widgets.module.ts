import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidgetsPageRoutingModule } from './widgets-routing.module';

import { WidgetsPage } from './widgets.page';
import { AccountsPageModule } from '../accounts/accounts.module';
import { FundTransferPageModule } from '../fund-transfer/fund-transfer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetsPageRoutingModule,
    AccountsPageModule,
    FundTransferPageModule
  ],
  declarations: [WidgetsPage],
  exports: [WidgetsPage],
})
export class WidgetsPageModule { }
