import {Component} from "angular2/core";
import {handsontable, HotTable} from "./handsontable";
import {NgClass} from "angular2/common";
declare var Handsontable:Function;
// let template = require('templates/basic-demo.html');

@Component({
    selector: 'basic-demo',
    template:`

<hot-table [data]="data"
           (after-change)="afterChange($event)"
           (after-on-cell-mouse-down)="afterOnCellMouseDown($event)"
           [col-headers]="colHeaders"
           [columns]="columns"
           [options]="options"
           [col-widths]="colWidths">
</hot-table>
`,
    // templateUrl:'templates/basic-demo.html',
    directives:[handsontable,NgClass]
})


export class BasicDemo {
    private data:Array<any> = genData(10);
    private colHeaders:Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
        'Favorite food', 'Price', 'Is active'];
    private columns:Array<any> = [
        {
            data: 'id'
        },
        {
            data: 'name.first',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'name.last',
            readOnly: true
        },
        {
            data: 'address'
        },
        {
            data: 'product.description',
            source: 'product.options',
            optionField: 'description',
            type: 'autocomplete',
            strict: false,
            visibleRows: 4
        },
        {
            data: 'price',
            type: 'numeric',
            format: '$ 0,0.00'
        },
        {
            data: 'isActive',
            type: 'checkbox',
            checkedTemplate: 'Yes',
            uncheckedTemplate: 'No'
        }
    ];
    private colWidths:Array<number> = [null, null, null, null, null, null, 30];
    private options:any = {
        stretchH: 'all',
        columnSorting: true,
        contextMenu: [
            'row_above', 'row_below', 'remove_row'
        ]
    };

    private afterChange(e:any) {
        console.log(e);
    }

    private afterOnCellMouseDown(e:any) {
        console.log(e);
    }
}
function genData(rows:number = 10):Array<any> {
    let products:Array<any> = [
            {
                description: 'Big Mac',
                options: [
                    {description: 'Big Mac'},
                    {description: 'Big Mac & Co'},
                    {description: 'McRoyal'},
                    {description: 'Hamburger'},
                    {description: 'Cheeseburger'},
                    {description: 'Double Cheeseburger'}
                ]
            },
            {
                description: 'Fried Potatoes',
                options: [
                    {description: 'Fried Potatoes'},
                    {description: 'Fried Onions'}
                ]
            }
        ],
        firstNames = ['Ted', 'John', 'Macy', 'Rob', 'Gwen', 'Fiona', 'Mario',
            'Ben', 'Kate', 'Kevin', 'Thomas', 'Frank'],
        lastNames = ['Tired', 'Johnson', 'Moore', 'Rocket', 'Goodman', 'Farewell',
            'Manson', 'Bentley', 'Kowalski', 'Schmidt', 'Tucker', 'Fancy'],
        address = ['Turkey', 'Japan', 'Michigan', 'Russia', 'Greece', 'France', 'USA',
            'Germany', 'Sweden', 'Denmark', 'Poland', 'Belgium'];

    let items:Array<any> = [];
    let product:any;
    let newProduct;

    for (let i = 0; i < rows; i++) {
        // clone expected product
        product = products[Math.floor(Math.random() * products.length)];
        newProduct = {
            description: product.description,
            options: []
        };
        product.options.forEach(function (p) {
            newProduct.options.push({description: p.description});
        });
        /// clone expected product

        items.push({
            id: i + 1,
            name: {
                first: firstNames[Math.floor(Math.random() * firstNames.length)],
                last: lastNames[Math.floor(Math.random() * lastNames.length)]
            },
            date: `${Math.max(Math.round(Math.random() * 12), 1)} / ${Math.max(Math.round(Math.random() * 28), 1)} /
      ${(Math.round(Math.random() * 80) + 1940)}`,
            address: `${Math.floor(Math.random() * 100000)} ${address[Math.floor(Math.random() * address.length)]}`,
            price: Math.floor(Math.random() * 100000) / 100,
            isActive: Math.floor(Math.random() * products.length) / 2 === 0 ? 'Yes' : 'No',
            product: newProduct
        });
    }

    return items;
}
