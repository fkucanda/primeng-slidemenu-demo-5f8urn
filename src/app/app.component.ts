import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host ::ng-deep .ui-slidemenu {
          width: 13.5em
      }
  `,
  ],
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Search modal',
        icon: 'pi pi-fw pi-search',
      },
      { separator: true },
      {
        label: 'Advertiser groups',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Save group',
            icon: 'pi pi-fw pi-save',
          },
          {
            label: 'Prva grupa',
          },
          {
            label: 'Druga grupa',
          },
          {
            label: 'Treca grupa',
          },
        ],
      },
    ];
  }
}
