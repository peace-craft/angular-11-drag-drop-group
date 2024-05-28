import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less'],
})
export class GroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChildren(CdkDropList) dropLists: QueryList<CdkDropList>;

  filtersList = [
    {
      id: 0,
      name: 'Bank Name',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 2,
      name: 'Company Name',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 3,
      name: 'Company Nation Region',
      hierarchyUniqueName: '[Company].[Company Nation Region]',
      values: [],
      selected: [],
      type: 'multi-select',
      IsExcluded: false,
    },
  ];

  groups = [
    {
      id: 0,
      title: 'Group 0',
      groups: [
        {
          id: 0,
          name: 'Bank Name',
          hierarchyUniqueName: '[Banks].[Bank Name]',
          values: [],
          selected: [],
          type: 'company-select',
          IsExcluded: false,
        },
        {
          id: 2,
          name: 'Company Name',
          hierarchyUniqueName: '[Company].[Company Name]',
          values: [],
          selected: [],
          type: 'company-select',
          IsExcluded: false,
        },
        {
          id: 3,
          name: 'Company Nation Region',
          hierarchyUniqueName: '[Company].[Company Nation Region]',
          values: [],
          selected: [],
          type: 'multi-select',
          IsExcluded: false,
        },
      ],
      editing: false,
      group: true,
    },
  ];

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo = [
    {
      id: 0,
      name: 'Bank Name',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 2,
      name: 'Company Name',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 3,
      name: 'Company Nation Region',
      hierarchyUniqueName: '[Company].[Company Nation Region]',
      values: [],
      selected: [],
      type: 'multi-select',
      IsExcluded: false,
    },
  ];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  done = [
    {
      id: 0,
      name: 'Bank Name',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
    {
      id: 2,
      name: 'Company Name',
      hierarchyUniqueName: '[Company].[Company Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
    },
  ];

  list = [
    {
      group: 0,
      name: 'Group Bank Name 0',
      hierarchyUniqueName: '[Banks].[Bank Name]',
      values: [],
      selected: [],
      type: 'company-select',
      IsExcluded: false,
      items: [
        {
          id: 0,
          name: 'Bank Name 0',
          hierarchyUniqueName: '[Banks].[Bank Name]',
          values: [],
          selected: [],
          type: 'company-select',
          IsExcluded: false,
        },
        {
          id: 1,
          name: 'Company Name 1',
          hierarchyUniqueName: '[Company].[Company Name]',
          values: [],
          selected: [],
          type: 'company-select',
          IsExcluded: false,
        },
        {
          id: 2,
          name: 'Company Name 2',
          hierarchyUniqueName: '[Company].[Company Name]',
          values: [],
          selected: [],
          type: 'company-select',
          IsExcluded: false,
        },
      ],
    },
    // {
    //   group: 1,
    //   name: 'Group Company Name 1',
    //   hierarchyUniqueName: '[Company].[Company Name]',
    //   values: [],
    //   selected: [],
    //   type: 'company-select',
    //   IsExcluded: false,
    //   items: [
    //     {
    //       id: 0,
    //       name: 'Bank Name 1 group: 1',
    //       hierarchyUniqueName: '[Banks].[Bank Name]',
    //       values: [],
    //       selected: [],
    //       type: 'company-select',
    //       IsExcluded: false,
    //     },
    //     {
    //       id: 0,
    //       name: 'Bank Name 2 group: 1',
    //       hierarchyUniqueName: '[Banks].[Bank Name]',
    //       values: [],
    //       selected: [],
    //       type: 'company-select',
    //       IsExcluded: false,
    //     },
    //   ],
    // },
  ];

  total = ['Group Bank Name 0', 'Group Company Name 1'];
  // total = [0, 1];

  testTotal: string[] = ['todoList', 'doneList'];

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

  toggleEdit(group) {
    group.editing = !group.editing;
  }

  dropInGroup(event: CdkDragDrop<any>, groupIndex: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const draggedItem = event.previousContainer.data[event.previousIndex];
      transferArrayItem(
        event.previousContainer.data,
        this.groups[groupIndex].groups,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
