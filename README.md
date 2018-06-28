# ir-alert
Angular 6 alert component

## Usage

1. Install from npm:
```
npm install ir-alert --save
```

2. Import **IrAlertModule** to app.module.ts:
```javascript
import { IrAlertModule } from 'ir-alert';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        IrAlertModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Import **IrAlertService** to component that you want to use the alert:
```javascript
import { IrAlertService } from 'ir-alert';
```

4. Use the alert service:
```javascript
constructor(public alert: IrAlertService) {
    this.alert.showAlert({
        title: 'IrAlert',
        message: 'Hello World!'
    });
}
```

## Parameters
| Param | Type |
| ----- | ---- |
| config | IrAlertConfig |
| buttons | IrAlertButton[] |
| inputs | IrAlertInput[] |

### IrAlertConfig
> You can use **MatDialogConfig** for **IrAlertConfig** with these two extra configs:

| Config | Type |
| ------ | ---- |
| title | String |
| message? | String |

### IrAlertButton
| Attribute | Type |
| --------- | ---- |
| text | String |
| handler? | Function |

#### sample:
```javascript
[
    {
        text: 'Yes',
        handler: () => {
            console.log('You pressed "Yes"');
        }
    },
    {
        text: 'No',
        handler: () => {
            console.log('You pressed "No"');
        }
    }
]
```

### IrAlertInput
| Attribute | Type |
| --------- | ---- |
| type | String - 'text', 'number', 'tel' , 'password', 'textarea', 'radio', 'checkbox', 'h1', 'h2', 'h3', 'h3', 'h4', 'h5' |
| name | String |
| value? | String |
| placeholder? | String |
| label? | String - require if type is radio or checkbox |
| multiLine? | Boolean - show radio or checkbox in multiline or inline |
| rows? | Number - number of rows in textarea |
| group? | IrAlertRadioGroup[] - require if type is radio |

#### IrAlertRadioGroup:
| Attribute | Type |
| --------- | ---- |
| value | String |
| label | String |

# Sample
```javascript
constructor(public alert: IrAlertService) {
    this.alert.showAlert({
        title: 'IrAlert',
        message: 'Hello World!'
    }, [
        {
            text: 'Yes',
            handler: (values) => {
                console.log(values);
            }
        },
        {
            text: 'No',
            handler: () => {
                console.log('You pressed "No"');
            }
        }
    ], [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name'
        },
        {
            type: 'text',
            name: 'lastname',
            placeholder: 'LastName'
        }
    ]);
}
```