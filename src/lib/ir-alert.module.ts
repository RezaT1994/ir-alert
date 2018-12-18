import { NgModule } from '@angular/core';
import { IrAlertContent } from '../content/ir-alert-content';
import { MatDialogModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    MatDialogModule,
    FormsModule,
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRadioModule
  ],
  declarations: [IrAlertContent],
  entryComponents: [IrAlertContent]
})
export class IrAlertModule { }
