import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DemoMaterialModule } from '../shared-modules/material-module';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DialogComponent } from '../shared-modules/users/dialog/dialog.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'port', pathMatch: 'full',
  },
  {
    path: 'port', component: MainLayoutComponent,
    children: [
      { path: ':lang', component: HomeComponent },

      { path: '**', redirectTo: '/port', pathMatch: 'full' },
    ]
  },
  {
    path: 'port/**', redirectTo: 'port',
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DemoMaterialModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  exports: [RouterModule, TranslateModule],
  entryComponents: [],
})
export class LayoutRoutingModule { }
