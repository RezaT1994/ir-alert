import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'lib-alert',
	templateUrl: 'ir-alert-content.html',
	styleUrls: ['ir-alert-content.scss']
})
export class IrAlertContentComponent {
	title: string;
	msg: string;
	buttons: any;
	inputs: any[] = [];
	values: Object = {};

	constructor(public dialogRef: MatDialogRef<IrAlertContentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
		this.title = data.title;
		this.msg = data.msg;
		if (data.buttons !== undefined && data.buttons.length !== 0) {
			this.buttons = data.buttons;
		} else {
			this.buttons = [
				{
					text: 'Close'
				}
			];
		}
		if (data.inputs !== undefined) {
			this.inputs = data.inputs;
			this.inputs.map((input) => {
				this.values[input.name] = (input.value !== undefined) ? input.value : '';
			});
		}
	}

	handler(evt: Function) {
		if (evt !== undefined) {
			if (this.inputs.length === 0) {
				evt();
			} else {
				evt(this.values);
			}
		}
		this.close();
	}

	close(): void {
		this.dialogRef.close();
	}
}
