import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { IrAlertContent } from '../content/ir-alert-content';

@Injectable({
  providedIn: 'root'
})
export class IrAlertService {

  constructor(private dialog: MatDialog) {}

  showAlert(config?: IrAlertConfig<any>, buttons?: IrAlertButton[], inputs?: IrAlertInput[]): MatDialogRef<any> {
		if (config.message === undefined) {
			config.message = '';
		}
		if (config['data'] === undefined) {
			config['data'] = { title: config.title, msg: config.message, buttons: buttons, inputs: inputs };
		} else {
			config['data'].title = config.title;
			config['data'].msg = config.message;
			config['data'].buttons = buttons;
			config['data'].inputs = inputs;
		}
		config['backdropClass'] = 'alert-overlay';
		return this.dialog.open(IrAlertContent, config);
	}
}

interface IrAlertConfig<T> extends MatDialogConfig<any> {
	title: string;
	message?: string;
}

interface IrAlertButton {
	text: string;
	handler?: Function;
}

interface IrAlertInput {
	type: 'text' | 'number' | 'tel' | 'password' | 'textarea' | 'radio' | 'checkbox' | 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5';
	name: string;
	value?: string;
	placeholder?: string;
	label?: string;
	multiLine?: boolean;
	rows?: number;
	group?: IrAlertRadioGroup[];
}

interface IrAlertRadioGroup {
	value: string;
	label: string;
}
