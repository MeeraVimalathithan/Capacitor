import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { WidgetsPageModule } from '../widgets/widgets.module';
import { PreferencesPageModule } from '../preferences/preferences.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    WidgetsPageModule,
    PreferencesPageModule
    // WidgetsPage 
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
