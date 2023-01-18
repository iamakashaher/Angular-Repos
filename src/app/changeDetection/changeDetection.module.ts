import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './changeDetection.component';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from '../components/count/count.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionComponent
  }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    ChangeDetectionComponent,
    CountComponent
  ],
})
export class ChangeDetectionModule {}
