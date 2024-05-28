import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-deals-bi',
  templateUrl: './deals-bi.component.html',
  styleUrls: ['./deals-bi.component.less'],
})
export class DealsBiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  filterList = [
    {
      id: 0,
      name: 'Filter - Bank Name',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 1,
      name: 'Filter - Company Name',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 2,
      name: 'Filter - Company Nation Region',
      hierarchyUniqueName: '[Company].[Company Nation Region]',
      values: [],
      selected: [],
      type: 'multi-select',
      IsExcluded: false,
    },
    {
      id: 3,
      name: 'Bank Name 0',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 4,
      name: 'Company Name 1',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 5,
      name: 'Company Name 2',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
  ];

  groupList = [
    {
      group: 0,
      name: 'Group-ID 0',
      editing: false,
      items: [],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getData(type: string) {
    console.warn(
      type === 'filter'
        ? JSON.stringify(this.filterList, null, 2)
        : JSON.stringify(this.groupList, null, 2)
    );
  }

  editGroup(index: number) {
    this.groupList[index].editing = true;
  }

  handleKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.editGroup(index);
      event.preventDefault();
    }
  }
}
