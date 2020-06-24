import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToSquareMatrixPipe } from './pipes/to-square-matrix.pipe';

@NgModule({
  declarations: [ToSquareMatrixPipe],
  imports: [
    CommonModule
  ],
  exports: [ToSquareMatrixPipe]
})
export class SharedModule { }
